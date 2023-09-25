import styled from "styled-components";
import { BackArrowButton, Card, Moves, Move, Abilities, Ability, LoadingPage } from '../components';
import { getPokemon } from "../services/getPokemon";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeState } from "../contexts/themes";
import { useContext } from "react";
import BgHeroDay from "../assets/img/bg-hero-day.png";
import BgHeroNight from "../assets/img/bg-hero-night.png";


const getAbilities = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const PokemonDetails = () => {
  const { theme } = useContext(ThemeState);

  const [pokemon, setPokemon] = useState();
  const [abilities, setAbilities] = useState();
  const [isloading, setIsLoading] = useState(true);

  const { name } = useParams();

  const fetchPokemon = async (pokemonName) => {
    const data = await getPokemon(pokemonName);

    const promises = data.abilities.map(async (ability) => {
      return await getAbilities(ability.ability.url);
    });

    const result = await Promise.all(promises);
    setPokemon(data);
    setAbilities(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon(name);
  }, []);

  return (
    <Main theme={theme}>
      {isloading && <LoadingPage />}
      <BackArrowButton />
      {!isloading && (
        <Card
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types.map((pokemon) => pokemon.type.name)}
        />
      )}
      <Abilities>
        {abilities?.map((ability) => {
          const englishFilter = ability.effect_entries
            .filter((entry) => entry.language.name === "en")
            .map((filter) => filter.effect);

          return (
            <Ability
              key={ability.id}
              name={ability.name}
              description={englishFilter}
            />
          );
        })}
      </Abilities>
      <Moves>
        {pokemon?.moves.map((move, index) => {
          return <Move key={index} move={move.move.name} />;
        })}
      </Moves>
    </Main>
  );
};

const Main = styled.main`
  display: grid;
  place-content: center;
  grid-template-columns: 260px 50%;
  grid-template-rows: 360px 360px;
  background: url(${({ theme }) => theme === "light" ? BgHeroDay : BgHeroNight}) no-repeat bottom center;
  background-size: cover;
  min-height: 100vh;
  gap: 3rem;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 6rem 1rem 1rem 1rem;
  }
`;

export { PokemonDetails };
