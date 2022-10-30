import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Sprechstunden() {
  return (
    <div id="Sprechstunden" padding={"5"}>
      <Container>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Termine auch gerne nach Vereinbarung</TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Nachmittags</Th>
                <Th>Abends</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Montag</Td>
                <Td>15:00 - 16:00 Uhr</Td>
                <Td>18:30 - 19:30 Uhr </Td>
              </Tr>
              <Tr>
                <Td>Dienstag</Td>
                <Td>15:00 - 16:00 Uhr</Td>
                <Td> - </Td>
              </Tr>
              <Tr>
                <Td>Mittwoch</Td>
                <Td>15:00 - 16:00 Uhr</Td>
                <Td> - </Td>
              </Tr>
              <Tr>
                <Td>Donnerstag</Td>
                <Td>15:00 - 16:00 Uhr</Td>
                <Td> - </Td>
              </Tr>
              <Tr>
                <Td>Freitag</Td>
                <Td>15:00 - 16:00 Uhr</Td>
                <Td>18:30 - 19:30 Uhr </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
