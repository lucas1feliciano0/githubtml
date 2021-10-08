import styled from "styled-components/native";
import { FlatListProps } from "react-native";
import LottieView from "lottie-react-native";

import { Repo } from "../../../types";

import SearchBarComponent from "@components/SearchBar";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.primary};
  padding-top: ${(props) => props.theme.padding.big}px;
`;

export const SearchBar = styled(SearchBarComponent)`
  margin: 0 ${(props) => props.theme.padding.big}px;
`;

export const RepoList = styled.FlatList.attrs((props) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: props.theme.padding.big,
  },
}))<FlatListProps<Repo>>``;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LottieSubtitle = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.texts.secondary};
`;

export const Lottie = styled(LottieView)`
  width: ${(props) => props.theme.wp("35%")}px;
  height: ${(props) => props.theme.wp("35%")}px;
  margin-bottom: ${(props) => props.theme.padding.big}px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.colors.primary,
  size: 'large'
}))``;
