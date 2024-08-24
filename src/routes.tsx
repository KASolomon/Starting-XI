import { createBrowserRouter } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import PlayerList from "./screens/PlayerList";
import TeamList from "./screens/TeamList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
    children: [
      { path: "playerDetails", element: <PlayerList /> },
      { path: "teamSheet", element: <TeamList /> },
    ],
  },
]);

export default router;
