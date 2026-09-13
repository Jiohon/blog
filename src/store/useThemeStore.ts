import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import type { ThemeMode } from "antd-style"
import type { StateStorage } from "zustand/middleware"

interface Store {
  storeTheme: ThemeMode
  setStoreTheme: (mode: ThemeMode) => void
}

const themeStorage: StateStorage = {
  getItem(name) {
    try {
      return typeof window === "undefined" ? null : window.localStorage.getItem(name)
    } catch {
      return null
    }
  },
  setItem(name, value) {
    try {
      window.localStorage.setItem(name, value)
    } catch {
      return
    }
  },
  removeItem(name) {
    try {
      window.localStorage.removeItem(name)
    } catch {
      return
    }
  },
}

export const useThemeStore = create<Store>()(
  persist(
    (set) => ({
      storeTheme: "auto" as ThemeMode,
      setStoreTheme: (mode: ThemeMode) => {
        set({ storeTheme: mode })
      },
    }),
    {
      name: "SITE_THEME_MODE",
      storage: createJSONStorage(() => themeStorage),
      skipHydration: true,
    }
  )
)
