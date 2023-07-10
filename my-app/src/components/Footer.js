import { Box, Stack } from "@chakra-ui/react"

export const Footer = ()=>{
    return <Stack direction='row' justifyContent={'space-evenly'} alignItems='center'>
        <Box>Contact us</Box>
        <Box>Privacy Policy</Box>
        <Box>Designed with Passion</Box>
    </Stack>
}