import styled from "styled-components";
import { BackArrowButton } from "../components/BackArrowButton";
import { Card } from "../components/Card";
import { Moves } from "../components/Moves";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Abilities } from "../components/Abilities";
import { Ability } from "../components/Ability";
import { Move } from "../components/Move";

const getPokemon = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  return await response.json();
};

const getAbilities = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const PokemonDetails = () => {
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
    // setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon(name);
  }, []);

  console.log(pokemon);

  return (
    <Main>
      <BackArrowButton />
      {pokemon !== undefined && (
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
  background: ${({ theme }) => theme.colors.secondaryColor};
  min-height: 100vh;
  gap: 3rem;
`;

export { PokemonDetails };
