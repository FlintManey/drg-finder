"use client";
import Image from "next/image";
import { Title } from "@/components/title";
import { Main } from "@/components/main";
import { DragonGrid, DragonListItem, ListItem } from "@/components/dragon";
import dragonList from "./dragons.json";

export default function Home() {
  return (
    <Main>
      <Title>&#128009; Dragon Finder &#128009;</Title>
      <DragonGrid>
        {dragonList.dragons.map((dragon) => {
          return (
            <DragonListItem
              key={dragon.name}
              imgSrc={dragon.imgCard}
              name={dragon.name}
              adroableness={10}
            />
          );
        })}
      </DragonGrid>
    </Main>
  );
}
