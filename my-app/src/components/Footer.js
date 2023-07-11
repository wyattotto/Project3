import { Box, Stack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      position="sticky"
      bottom={0}
      left={0}
      right={0}
      height="50px"
      bg="gray.200"
      zIndex={999}
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        height="100%"
      >
        <Box>Contact us</Box>
        <Box>Privacy Policy</Box>
        <Box>Designed with Passion</Box>
      </Stack>
    </Box>
  );
};
