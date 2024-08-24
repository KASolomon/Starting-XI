import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AppData {
  totalPlayers: number;
  playersPerTeam: number;
  teams : any []
}
interface ContextShape {
  appData: AppData;
  setAppData: Dispatch<SetStateAction<AppData>>;
}

export const StartingXIContext = createContext<ContextShape>({
  appData: { totalPlayers: 0, playersPerTeam: 0, teams: [] },
  setAppData: () => null,
});

interface Props {
  children: ReactNode;
}
const AppContext = ({ children }: Props) => {
  const [appData, setAppData] = useState<AppData>({
    totalPlayers: 0,
    playersPerTeam: 0,
    teams: [],
  });

  return (
    <StartingXIContext.Provider value={{ appData, setAppData
    }}>
      {children}
    </StartingXIContext.Provider>
  );
};

export default AppContext;
