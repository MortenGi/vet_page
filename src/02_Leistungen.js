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

const img_sources = {
  Hund_01:
    "https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281_960_720.jpg",
  Kuh_01:
    "https://cdn.pixabay.com/photo/2014/07/15/17/45/cow-394148_960_720.jpg",
};

export default function Leistungen() {
  return (
    <div id="Leistungen">
      {/* ----PPART 1: DOGGO----P */}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Flex bg="brand.400">
          <Image
            src={img_sources["Hund_01"]}
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

      {/* ----PART 2: COW---- */}

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
    </div>
  );
}
