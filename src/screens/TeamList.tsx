import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    Icon,
    List,
    ListIcon,
    ListItem,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaClipboardList } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import Footer from "../components/Footer";
import { StartingXIContext } from "../config/AppContext";

const TeamList = () => {
  const {
    appData: { teams },
  } = useContext(StartingXIContext);
  const backgroundColor = useColorModeValue("gray.50", "blue.900");
  const teamSheetBackground = useColorModeValue("gray.800", "blue.700");
  const ballColor = useColorModeValue("gray.900", "white");

  return (
    <>
      <Center
        flexGrow={1}
        minH={"100vh"}
        backgroundImage={"url('/pitch2.jpg')"}
        backgroundPosition="center"
        width={"100vw"}
        minHeight={"100vh"}
        padding={8}
      >
        <Box
          height={"auto"}
          minW={{ base: "90vw", md: "90vw" }}
          bgColor={backgroundColor}
          rounded={"md"}
          padding={4}
          paddingY={8}
        >
          <Heading
            fontSize={{ base: "large", md: "x-large" }}
            textAlign={"center"}
            marginBottom={6}
          >
            Team Sheet |{" "}
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={{ base: "medium", md: "large" }}
              display={"inline"}
            >
              Starting XI
            </Text>
          </Heading>
          <Grid
            gap={4}
            templateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          >
            {teams.map((team, index) => (
              <Flex
                key={index}
                background={teamSheetBackground}
                rounded={"md"}
                p={4}
                minW={"250px"}
                flexDir={"column"}
                alignItems={"center"}
              >
                <Heading textAlign={"center"} fontSize={"large"} mb={4}>
                  Team {index + 1}
                </Heading>
                <List spacing={3}>
                  {team.map((player: string, index: number) => (
                    <ListItem key={index}>
                      <ListIcon as={GiSoccerBall} color={ballColor} />
                      {player}
                    </ListItem>
                  ))}
                </List>
              </Flex>
            ))}
          </Grid>

          <Center mt={8}>
            <Button width={"30vw"} bgColor={"orange.600"} onClick={() => {}}>
              <Icon as={FaClipboardList} marginRight={2} boxSize={6} />
              Save Team Sheet
            </Button>
          </Center>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default TeamList;
