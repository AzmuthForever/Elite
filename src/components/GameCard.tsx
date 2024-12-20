import { Game } from "../hooks/useGames";
import { Image, Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {" "}
          {game.name}
          <Emojis rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
