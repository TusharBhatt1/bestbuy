import { fallbackTheme } from "@/utils";
import { create } from "zustand";

interface ThemeProps {
  merchantName: string;
  merchantLogo: any;
  theme: {
    "--background": string;
    "--foreground": string;
    "--primary": string;
    "--primary-foreground": string;
  };
}

interface ThemeStore {
  theme: ThemeProps;
  setTheme: (newTheme: ThemeProps) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme:fallbackTheme,
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
