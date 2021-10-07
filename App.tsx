import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "@hooks/useCachedResources";
import Navigation from "@navigation/index";

import theme from "@theme/index";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
          <StatusBar style="inverted" />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
