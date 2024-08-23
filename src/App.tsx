import { Box } from "@chakra-ui/react";
import WelcomeScreen from "./screens/WelcomeScreen";

function App() {
  return (
    <Box
      backgroundImage={"url('./src/assets/pitch.jpg')"}
      backgroundColor={"transparent"}
      backgroundPosition="center"
      width={"100vw"}
      height={"100vh"}
    >
      <WelcomeScreen />
    </Box>
  );
}

export default App;
