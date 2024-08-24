import {
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import LeftSlideBox from "../components/LeftSlideBox";
import { StartingXIContext } from "../config/AppContext";
import { GiSoccerBall } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

interface FormData {
  totalPlayers: number;
  playersPerTeam: number;
}
const WelcomeScreen = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>();
  const { appData, setAppData } = useContext(StartingXIContext);
  const navigate = useNavigate()

  const handleDataSubmit = (values: FormData) => {
    setAppData({ ...appData, ...values });
    navigate("/playerDetails");
  };


  return (
    <>
      <Center
        backgroundImage={"url('./src/assets/pitch.jpg')"}
        backgroundColor={"transparent"}
        backgroundPosition="center"
        width={"100vw"}
        flexGrow={1}
        minH={"100vh"}
      >
        <LeftSlideBox>
          <Heading
            fontSize={{ base: "large", md: "x-large" }}
            textAlign={"center"}
          >
            Welcome to{" "}
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={{ base: "large", md: "x-large" }}
              display={"inline"}
            >
              Starting XI
            </Text>
          </Heading>

          <Text textAlign={"center"} fontWeight={"bold"} marginY={4}>
            Let's Set Up Your Teams
          </Text>
          <Flex flexDir={"column"} gap={6} paddingTop={6}>
            <FormControl isRequired>
              <NumberInput min={0} id="totalPlayers">
                <NumberInputField
                  placeholder="How many players do you have?"
                  {...register("totalPlayers")}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel htmlFor="totalPlayers">
                Total Number of Players
              </FormLabel>
            </FormControl>
            <FormControl isRequired>
              <NumberInput min={0} id="playersPerTeam">
                <NumberInputField
                  placeholder="How many players per team?"
                  {...register("playersPerTeam")}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel htmlFor="playersPerTeam">Players Per Team</FormLabel>
            </FormControl>
            <Center>
              <Button
                onClick={handleSubmit(handleDataSubmit)}
                paddingX={10}
                paddingY={4}
                bgColor={"orange.600"}
              >
                <Icon as={GiSoccerBall} boxSize={6} marginRight={2} />
                Proceed
              </Button>
            </Center>
          </Flex>
        </LeftSlideBox>
      </Center>
      <Footer/>
    </>
  );
};

export default WelcomeScreen;
