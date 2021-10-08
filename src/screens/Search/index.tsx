import React, { useState } from "react";
import Toast from "react-native-toast-message";

import { Repo } from "../../../types";

import { githubApi } from "@services/api";
import SearchAnimation from "@assets/animations/search.json";

import RepoCard from "@components/RepoCard";

import {
  Container,
  LoadingIndicator,
  Lottie,
  ContentContainer,
  LottieSubtitle,
  RepoList,
  SearchBar,
} from "./styles";

const Search: React.FC = () => {
  const [fetching, setFetching] = useState(false);
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);

  async function loadRepos() {
    setFetching(true);
    try {
      const response: any = await githubApi.get(`/users/${search}/repos`);
      const rawData = response.data;

      const repoData: Repo[] = rawData
        .sort((a: any, b: any) => (a.stargazers_count > b.stargazers_count ? -1 : 1))
        .map((repo: any) => ({
          name: repo.full_name,
          description: repo.desc,
          forks: repo.forks_count,
          stars: repo.stargazers_count,
          lang: repo.owner.login,
        }));

      setRepos(repoData);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Opa! Algo deu errado! :/",
        text2: "Usuário não encontrado.",
        topOffset: 60,
      });
    }
    setFetching(false);
  }

  function handleSubmitSearch() {
    loadRepos();
  }

  function handleChangeText(newValue: string) {
    setRepos([]);
    setSearch(newValue);
  }

  function renderContent() {
    if (fetching) {
      return (
        <ContentContainer>
          <LoadingIndicator />
        </ContentContainer>
      );
    } else if (repos.length > 0) {
      return (
        <RepoList
          data={repos}
          keyExtractor={(repo: Repo) => repo.name}
          renderItem={({ item }: { item: any }) => (
            <RepoCard
              title={item.name}
              description={item.description}
              forks={item.forks}
              stars={item.stars}
              lang={item.lang}
            />
          )}
        />
      );
    } else {
      return (
        <ContentContainer>
          <Lottie autoPlay loop source={SearchAnimation} />
          <LottieSubtitle>Os resultados aparecerão aqui!</LottieSubtitle>
        </ContentContainer>
      );
    }
  }

  return (
    <Container>
      <SearchBar
        placeholder="Insira o nome de usuário"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitSearch}
      />
      {renderContent()}
    </Container>
  );
};

export default Search;
