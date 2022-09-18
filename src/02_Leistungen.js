import {
  AspectRatio,
  Center,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import pathMainImage from "./hund_knuffig_resized.jpg";

import { LoremIpsum } from "react-lorem-ipsum";

const img_sources = {
  Hund_01: pathMainImage,
};

export default function Leistungen() {
  return (
    <div id="Leistungen" padding={"5"}>
      {/* ----PPART 1: DOGGO----P */}

      <SimpleGrid
        columns={{
          base: 1,
          md: 1,
        }}
        spacing={0}
      >
        <Flex bg="brand.400">
          <Image
            src={img_sources["Hund_01"]}
            fit="cover"
            w="full"
            borderRadius="10px"
            h={{
              base: 64,
              md: "full",
            }}
            bg="gray.100"
            loading="lazy"
          />
        </Flex>
      </SimpleGrid>
      {/* ----PART 2: COW---- 

      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Flex bg="brand.400">
          <Image
            src={img_sources["Kuh_01"]}
            alt="Hund"
            fit="cover"
            w="full"
            borderRadius="10px"
            h={{
              base: 64,
              md: "full",
            }}
            bg="gray.100"
            loading="lazy"
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{
            base: 4,
            md: 8,
            lg: 20,
          }}
          py={24}
          zIndex={3}
        >
          <Text height="300px">
            <LoremIpsum></LoremIpsum>
          </Text>
        </Flex>
      </SimpleGrid>
      */}
    </div>
  );
}
