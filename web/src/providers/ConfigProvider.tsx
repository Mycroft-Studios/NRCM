import { Context, createContext, useContext, useEffect, useState } from 'react';
import { fetchNui } from '../utils/fetchNui';

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
  imagePath: "../assets/",
};

const ConfigCtx = createContext<{ config: Config; setConfig: (config: Config) => void } | null>(null);

const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<Config>({imagePath: '', Styles: {}});

  useEffect(() => {
      fetchNui<Config>("getConfig", null, DebugConfig).then((data) => setConfig(data));
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    if (config.Styles?.PrimaryColor) {
      root.style.setProperty("--primary-color", config.Styles.PrimaryColor);
    }
    if (config.Styles?.SecondaryColor) {
      root.style.setProperty("--secondary-color", config.Styles.SecondaryColor);
    }
    if (config.Styles?.TextColor) {
      root.style.setProperty("--text-color", config.Styles.TextColor);
    }
    if (config.Styles?.InvalidTextColor) {
      root.style.setProperty("--invalid-text-color", config.Styles.InvalidTextColor);
    }
    if (config.Styles?.SubmitColor) {
      root.style.setProperty("--submit-color", config.Styles.SubmitColor);
    }
    if (config.Styles?.SubmitHoverColor) {
      root.style.setProperty("--submit-hover-color", config.Styles.SubmitHoverColor);
    }
    if (config.Styles?.SubmitTextColor) {
      root.style.setProperty("--submit-text-color", config.Styles.SubmitTextColor);
    }
  }, [config.Styles]);

  return <ConfigCtx.Provider value={{ config, setConfig }}>{children}</ConfigCtx.Provider>;
};

export default ConfigProvider;

export const useConfig = () => useContext<ConfigCtxValue>(ConfigCtx as Context<ConfigCtxValue>);