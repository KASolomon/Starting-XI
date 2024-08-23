import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ContextShape {
  appData: {};
  setAppData: Dispatch<SetStateAction<{}>>;
}

export const StartingXIContext = createContext<ContextShape>({appData :{}, setAppData : ()=> null});

interface Props {
  children: ReactNode;
}
const AppContext = ({ children }: Props) => {
  const [appData, setAppData] = useState({});

  return (
    <StartingXIContext.Provider value={{ appData, setAppData }}>
      {children}
    </StartingXIContext.Provider>
  );
};

export default AppContext;
