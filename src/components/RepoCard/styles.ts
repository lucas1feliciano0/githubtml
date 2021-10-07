import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.small}px;
  margin-bottom: ${(props) => props.theme.padding.big}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  padding: ${(props) => props.theme.padding.big}px 
  ${(props) => props.theme.padding.medium}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.texts.primary};
  margin-bottom: ${(props) => props.theme.padding.small}px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.texts.secondary};
`;

export const Footer = styled(Row)`
  border-top-width: 1px;
  padding: ${(props) => props.theme.padding.medium}px;
  border-color: ${(props) => props.theme.colors.border};
  justify-content: space-between;
`;

export const Info = styled(Row)`
  margin-left: ${(props) => props.theme.padding.medium}px;
`;

export const InfoText = styled(Subtitle)`
  font-size: ${(props) => props.theme.hp("1.8%")}px;
`;

export const Icon = styled(AntDesign).attrs((props) => ({
  color: props.theme.colors.texts.secondary,
  size: props.theme.hp("1.8%"),
}))`
  margin-right: ${(props) => props.theme.padding.small}px;
`;
