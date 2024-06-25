import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { Dispatch, ReactNode, createContext, useEffect, useState } from "react";
import { ACCESS_KEY, UNSPLASH_URL } from "../constants";

export interface IPhoto {
  id: string,
  alt: string;
  description: string;
  createdAt: string;
  downloads: string;
  url: string;
}

export interface IMeta {
  total: number;
  pages: number;
}

export interface IAllPhotos {
  photos: IPhoto[];
  meta: IMeta
}

interface IHome {
  page: number;
  query: string;
  photos: IAllPhotos | [];
  setQuery: Dispatch<React.SetStateAction<string>>;
  prevPage: () => void;
  nextPage: () => void;
}

export const HomeContext = createContext<IHome>({
  page: 1,
  query: "",
  photos: [],
  setQuery: () => {},
  nextPage: () => {},
  prevPage: () => {},
});

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState<IAllPhotos | []>([]);

  const nextPage = () => setPage((pg) => (pg += 1));

  const prevPage = () => (page === 1 ? setPage(1) : setPage((p) => (p -= 1)));

  useEffect(() => {
    const fetchImages = async () => {
      let que = query;
      try {
        const res = await axios.get(
          que === ""
            ? `${UNSPLASH_URL}/photos/random?page=${page}&count=6`
            : `${
                UNSPLASH_URL +
                "/search/photos?page=" +
                page +
                "&per_page=6&order_by=relevant&query=" +
                que
              }`,
          {
            headers: {
              Authorization: "Client-ID " + ACCESS_KEY,
            },
          }
        );
        console.log(res);
        const results = que === "" ? res.data : res.data.results;
        const data = results.map((r: any) => {
          const imgObj: IPhoto = {
            id: r.id,
            alt: r.alt_description,
            createdAt: r.created_at,
            description: r.description ?? r.alt_description,
            downloads: r.downloads,
            url: r.urls.raw,
          };
          return imgObj;
        });

        setPhotos(() => ({
          photos: data,
          meta: {
            total: res.data.total || Infinity,
            pages: res.data.total_pages || Infinity,
          },
        }));
      } catch (error) {
        enqueueSnackbar({
          message: "Unable to load more images, please refresh",
          variant: "error",
        });
      }
    };
    fetchImages();
  }, [page, query]);
  console.log(photos);
  return (
    <HomeContext.Provider
      value={{
        photos,
        page,
        query,
        setQuery,
        prevPage,
        nextPage,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
