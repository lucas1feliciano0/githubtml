import React, { useContext } from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ThemeContext } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { RootTabParamList, RootTabScreenProps } from "../../types";

import Home from "@screens/Home";
import Search from "@screens/Search";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const navigation: React.FC = () => {
  const theme = useContext(ThemeContext);

  const barStyle: BottomTabNavigationOptions = {
    tabBarStyle: {
      height: theme.hp("7.5%"),
      backgroundColor: theme.colors.background.secondary,
      borderTopColor: theme.colors.border,
    },
    tabBarActiveTintColor: theme.colors.primary,
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarItemStyle: {
      paddingVertical: 5,
    },
    headerStyle: {
      backgroundColor: theme.colors.background.secondary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerTintColor: theme.colors.texts.primary,
    headerTitleAlign: 'center'
  };

  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={barStyle}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Explorar",
          tabBarIcon: ({ color }) => <TabBarIcon name="rocket-outline" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Pesquisar",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default navigation;
