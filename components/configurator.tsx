import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

const ConfiguratorContext = createContext<{
  top: string;
  bottom: string;
  vase1: string;
  vase2: string;
  setTop?: Dispatch<SetStateAction<string>>;
  setBottom?: Dispatch<SetStateAction<string>>;
  setVase1?: Dispatch<SetStateAction<string>>;
  setVase2?: Dispatch<SetStateAction<string>>;
}>({ top: "Top1-1", bottom: "Bottom1-1", vase1: "", vase2: "" });

export const ConfiguratorProvider = ({ children }: PropsWithChildren) => {
  const [top, setTop] = useState("Top1-1");
  const [bottom, setBottom] = useState("Bottom1-1");
  const [vase1, setVase1] = useState("");
  const [vase2, setVase2] = useState("");

  return (
    <ConfiguratorContext.Provider
      value={{
        top,
        bottom,
        vase1,
        vase2,
        setTop,
        setBottom,
        setVase1,
        setVase2,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
