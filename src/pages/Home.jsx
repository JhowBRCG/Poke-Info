import React, { useEffect, useState } from "react";
import {Header , Pokedex, Card, LoadMore, Footer } from '../components';
import { getPokemons } from "../services/getPokemons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const getPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemons = async () => {
    setIsLoading(true);
    const data = await getPokemons(limit);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });

    const results = await Promise.all(promises);
    setPokemons(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [limit]);


  return (
    <main>
      <Header />
      <Pokedex>
        <Cards>
          {pokemons.map((data) => {
            return (
              <Link to={`/details/${data.name}`} key={data.id}>
                <Card
                  name={data.name}
                  image={data.sprites.front_default}
                  types={data.types.map((pokemon) => pokemon.type.name)}
                />
              </Link>
            );
          })}
        </Cards>
        {isLoading && (
          <p style={{ textAlign: "center", marginTop: "5rem" }}>Loading...</p>
        )}
        <LoadMore limit={() => setLimit(limit + 10)} />
      </Pokedex>
      <Footer />
    </main>
  );
};

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export { Home };
