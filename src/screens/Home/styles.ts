import styled from "styled-components/native";
import { FlatListProps } from "react-native";

import { Repo } from "../../../types";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.primary};
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

export const LoadingIndicator = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.colors.primary,
  size: 'large'
}))``;
