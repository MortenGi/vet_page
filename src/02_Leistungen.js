import {
  AspectRatio,
  Center,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

import { LoremIpsum } from "react-lorem-ipsum";

export default function Leistungen() {
  return (
    <div>
      {/*
      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image src="./hund_knuffig.jpg" alt="Hund" objectFit="cover" />
  </AspectRatio>
      <Grid templateColumns="repeat(2, 5fr)" gap={1}>
        <GridItem w="100%" h="50">
          {" "}
          <Image src="./hund_knuffig.jpg" alt="Hund" objectFit="contain" />{" "}
        </GridItem>
        <GridItem w="100%" h="50">
          <Center>
            <Text>Hallo</Text>
          </Center>
        </GridItem>
      </Grid>*/}

      <Container>
        {" "}
        <Flex>
          <VStack w="full" h="full" spacing={10} alignItems="flex-start">
            <Image src="./hund_knuffig.jpg" alt="Hund" objectFit="contain" />
          </VStack>
          <VStack w="full" h="full" spacing={10} bg="gray.50">
            <Center>
              <Text>
                <LoremIpsum></LoremIpsum>
              </Text>
            </Center>
          </VStack>
        </Flex>
      </Container>
    </div>
  );
}
