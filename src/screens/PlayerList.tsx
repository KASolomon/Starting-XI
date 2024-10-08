import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StartingXIContext } from "../config/AppContext";
import { GiSoccerKick } from "react-icons/gi";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const PlayerList = () => {
  const {
    appData: { playersPerTeam, totalPlayers },
    setAppData,
  } = useContext(StartingXIContext);
  const { register, handleSubmit, reset } = useForm();
  const inputFields = Array.from({ length: totalPlayers });

  const navigate = useNavigate();
  const handleTeamGeneration = (values: any) => {
    debugger;
    const availablePlayers = Object.values(values);
    reset();
    const teams = [];
    // Shuffle array
    for (let i = availablePlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availablePlayers[i], availablePlayers[j]] = [
        availablePlayers[j],
        availablePlayers[i],
      ]; // Swap elements
    }

    // // Create teams by slicing the shuffled array
    for (let i = 0; i < availablePlayers.length; i += playersPerTeam) {
      teams.push(availablePlayers.slice(i, i + playersPerTeam));
     
    }

    setAppData({ playersPerTeam, totalPlayers, teams });

    navigate("/teamSheet");
  };
  const backgroundColor = useColorModeValue("gray.50", "blue.900");

  return (
    <>
      <Center
        flexGrow={1}
        minH={"100vh"}
        backgroundImage={"url('/pitch2.jpg')"}
        backgroundColor={"transparent"}
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
          transition={"all 0.5s ease-in-out"}
        >
          <Heading
            fontSize={{ base: "large", md: "x-large" }}
            textAlign={"center"}
            marginBottom={6}
          >
            Generate Your Teams |{" "}
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
            minH={"90vh"}
            overflowY={"auto"}
            gap={2}
            templateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          >
            {inputFields.map((_, index) => (
              <FormControl isRequired key={index}>
                <Input
                  type="text"
                  id={`player${index}`}
                  {...register(`player ${index}`, {
                    required: true,
                  })}
                />
                <FormLabel
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  htmlFor={`player${index}`}
                >
                  Player {index + 1}
                </FormLabel>
              </FormControl>
            ))}
          </Grid>

          <Center mt={8}>
            <Button
              bgColor={"orange.500"}
              onClick={handleSubmit(handleTeamGeneration)}
            >
              <Icon as={GiSoccerKick} marginRight={2} boxSize={7} />
              Generate Teams
            </Button>
          </Center>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default PlayerList;
