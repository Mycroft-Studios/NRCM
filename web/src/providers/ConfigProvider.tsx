import { Context, createContext, useContext, useEffect, useState } from "react";
import { fetchNui } from "../utils/fetchNui";

interface Styles {
  PrimaryColor?: string;
  SecondaryColor?: string;
  SecondaryColorHover?: string;
  TextColor?: string;
  InvalidTextColor?: string;
  SubmitColor?: string;
  SubmitHoverColor?: string;
  SubmitTextColor?: string;
  CloseButtonColor?: string;
  CloseButtonHoverColor?: string;
}

interface Config {
  imagePath: string;
  Styles?: Styles;
}

interface ConfigCtxValue {
  config: Config;
  setConfig: (config: Config) => void;
}

const DebugConfig: Config = {
  Styles: {
    PrimaryColor: "#232833",
    SecondaryColor: "#374151",
    SecondaryColorHover: "4424e61",
    TextColor: "#ffffff",
    InvalidTextColor: "#ff0000",
    SubmitColor: "#45d368",
    SubmitHoverColor: "#3ecf5f",
    SubmitTextColor: "#000000",
    CloseButtonColor: "#e74c3c",
    CloseButtonHoverColor: "#e43f2d",
  },
  imagePath: "./assets/",
};

const ConfigCtx = createContext<{
  config: Config;
  setConfig: (config: Config) => void;
} | null>(null);

const ApplyStyles = (styles: Styles) => {
  const root = document.querySelector(":root") as HTMLElement;
  if (styles.PrimaryColor) {
    root.style.setProperty("--primary-color", styles.PrimaryColor);
  }
  if (styles.SecondaryColor) {
    root.style.setProperty("--secondary-color", styles.SecondaryColor);
  }
  if (styles.TextColor) {
    root.style.setProperty("--text-color", styles.TextColor);
  }
  if (styles.InvalidTextColor) {
    root.style.setProperty("--invalid-text-color", styles.InvalidTextColor);
  }
  if (styles.SubmitColor) {
    root.style.setProperty("--submit-color", styles.SubmitColor);
  }
  if (styles.SubmitHoverColor) {
    root.style.setProperty("--submit-hover-color", styles.SubmitHoverColor);
  }
  if (styles.SubmitTextColor) {
    root.style.setProperty("--submit-text-color", styles.SubmitTextColor);
  }
};

const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<Config>({ imagePath: "", Styles: {} });

  // Fetch and apply config
  useEffect(() => {
    fetchNui<Config>("getConfig", null, DebugConfig).then((data) => {
      setConfig(data);
      if (data.Styles) ApplyStyles(data.Styles);
    });
  }, []);

  return (
    <ConfigCtx.Provider value={{ config, setConfig }}>
      {children}
    </ConfigCtx.Provider>
  );
};

export default ConfigProvider;

export const useConfig = () =>
  useContext<ConfigCtxValue>(ConfigCtx as Context<ConfigCtxValue>);
