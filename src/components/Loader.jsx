import { Box,Spinner } from "@chakra-ui/react";

const Loader = () => {
    return(
        <Box className="loader">
<Spinner size='xl' />
        </Box>
    )
}

export default Loader;