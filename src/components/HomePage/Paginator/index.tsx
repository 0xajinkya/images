import { Box } from "@mui/material"
import { IMeta } from "../../../context"

export const Paginator = ({page, meta, nextPage, prevPage}: {meta: IMeta, nextPage: () => void, prevPage: () => void, page: number}) => {
    return (
        <Box>
            {meta && 
                <Box>
                    Meta
                </Box>
            }
        </Box>
    )
}