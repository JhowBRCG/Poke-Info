import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Pokedex } from "../components/Pokedex";
import { Card } from "../components/Card";
import { LoadMore } from "../components/LoadMore";
import { Footer } from "../components/Footer";
import styled from "styled-components";

const getPokemons = async (limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  return await response.json();
};

const getPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const pokemonsInfo = async () => {
    const data = await getPokemons(limit);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });

    const results = await Promise.all(promises);
    setPokemons(results);
  };

  useEffect(() => {
    pokemonsInfo();
  }, [limit]);

  return (
    <>
      <Header />
      <Pokedex>
        {pokemons.length <= 0 && (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )}
        <Cards>
          {pokemons.map((data) => {
            return (
              <Card
                key={data.id}
                name={data.name}
                image={data.sprites.front_default}
                id={data.id}
              />
            );
          })}
        </Cards>
        <LoadMore limit={() => setLimit(limit + 10)} />
      </Pokedex>
      <Footer />
    </>
  );
};

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export { Home };
