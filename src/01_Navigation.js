import { ReactNode } from "react";
import {
  Box,
  Avatar,
  HStack,
  Button,
  useDisclosure,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import pathLogo from "./images/veterinaer_logo.jpg";

const Links = ["Sprechstunden", "Kontakt / Anfahrt"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Button
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("blue.200", "blue.700"),
    }}
    href={""}
    onClick={() => {
      console.log(children);
      document
        .getElementById(`${String(children)}`)
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    {children}
  </Button>
);

export default function Navigation(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="NavBar">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Avatar src={pathLogo} alt="Tierarztpraxis Dr. Jens Giese" />
          </Box>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          ></HStack>
          <Text as="b">Dr. med. vet. Jens Giese - Praxis für Kleintiere</Text>
        </HStack>

        {/*<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Avatar src={pathLogo} alt="Tierarztpraxis Dr. Jens Giese" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
              ) : null}</div>*/}
      </Box>
    </div>
  );
}
