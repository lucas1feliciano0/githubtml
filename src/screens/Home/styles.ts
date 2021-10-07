import styled from "styled-components/native";
import { FlatListProps } from "react-native";

import { Repo } from "./index";

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
