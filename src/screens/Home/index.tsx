import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import { Repo } from "../../../types";

import { trendingApi } from "@services/api";

import RepoCard from "@components/RepoCard";

import {
  Container,
  ContentContainer,
  LoadingIndicator,
  RepoList,
} from "./styles";

const Home: React.FC = () => {
  const [fetching, setFetching] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadRepos() {
      setFetching(true);
      try {
        const response: any = await trendingApi.get("/repo?since=weekly");
        const rawData = response.data.items;

        const repoData: Repo[] = rawData.map((repo: any) => ({
          name: repo.repo,
          description: repo.desc,
          forks: repo.forks,
          stars: repo.stars,
          lang: repo.lang,
        }));

        setRepos(repoData);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Opa! Algo deu errado! :/",
          text2: "Verifique sua conexão e tente novamente.",
          topOffset: 60,
        });
      }
      setFetching(false);
    }

    loadRepos();
  }, []);

  return (
    <Container>
      {fetching ? (
        <ContentContainer>
          <LoadingIndicator />
        </ContentContainer>
      ) : (
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
      )}
    </Container>
  );
};

export default Home;
