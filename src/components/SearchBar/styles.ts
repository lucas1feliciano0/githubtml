import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.small}px;
  height: ${(props) => props.theme.hp("7.5%")}px;
  padding: 0 ${(props) => props.theme.padding.medium}px;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: `${props.theme.colors.texts.secondary}80`,
  returnKeyType: "search",
}))<TextInputProps>`
  flex: 1;
  height: ${(props) => props.theme.hp("7.5%")}px;
  color: ${(props) => props.theme.colors.texts.primary};
`;

export const SearchIcon = styled(Ionicons).attrs((props) => ({
  name: "search",
  size: 18,
  color: `${props.theme.colors.texts.secondary}80`,
}))``;
