import React, { useEffect, useState } from "react";

import api from "@services/api";

import RepoCard from "@components/RepoCard";

import { Container, RepoList } from "./styles";

export type Repo = {
  name: string;
  description: string;
  forks: number;
  stars: number;
  lang: string;
};

const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadRepos() {
      const response: any = await api.get("/repo?since=weekly");
      const rawData = response.data.items;

      const repoData: Repo[] = rawData.map((repo: any) => ({
        name: repo.repo,
        description: repo.desc,
        forks: repo.forks,
        stars: repo.stars,
        lang: repo.lang,
      }));

      setRepos(repoData);
    }

    loadRepos();
  }, []);

  return (
    <Container>
      {repos && (
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
