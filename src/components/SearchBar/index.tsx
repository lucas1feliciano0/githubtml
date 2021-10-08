import React from "react";

import { Container, SearchIcon, TextInput } from "./styles";

interface IProps {
  placeholder: string;
  onChangeText?: (newValue: string) => void;
  onSubmitEditing?: () => void;
  style?: [];
}

const SearchBar: React.FC<IProps> = ({
  placeholder,
  onChangeText,
  onSubmitEditing,
  style
}) => {
  return (
    <Container style={style}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <SearchIcon />
    </Container>
  );
};

export default SearchBar;
