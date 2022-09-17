import { Box, Container, Heading, Highlight, Text } from "@chakra-ui/react";

export default function Urlaub() {
  return (
    <div id="Urlaub">
      <Container maxW="10px"> </Container>
      <Container
        centerContent
        maxW="2xl"
        alignContent={"center"}
        justifyContent={"center"}
        padding={"5"}
      >
        <Box padding="4" bg="yellow.100" color="black" maxW="md">
          <Highlight
            query={["Urlaub"]}
            styles={{ py: "1", fontWeight: "bold" }}
          >
            Urlaub
          </Highlight>{" "}
          <br />
          <br />
          <Text fontWeight="normal">
            Liebe Hunde und liebe Katzen,
            <br />
            meine Praxis ist bis zum 18.09.2022 leider geschlossen. <br />
            <Highlight
              query={["Montag", "19.09.2021"]}
              styles={{ py: "1", fontWeight: "bold" }}
            >
              Am Montag, dem 19.09.2021 bin ich wieder da.
            </Highlight>{" "}
            <br />
            Vielen Dank für Euer Verständnis. <br />
            Euer Tierarzt
          </Text>
        </Box>
      </Container>
    </div>
  );
}
