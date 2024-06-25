import { Box } from "@mui/material"
import { ReactNode } from "react"
import { HomeProvider } from "../../../context"

export const HomeLayout = ({children}: {children: ReactNode}) => {
    return (
        <HomeProvider>
        {children}
        </HomeProvider>
    )
}