import { Header } from "../components/Header";
import { Pokedex } from "../components/Pokedex";
import { Card } from "../components/Card";
import { Cards } from "./Home";
import { Footer } from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Loading } from "../components/Loading";
import { BackArrowButton } from "../components/BackArrowButton";

const getPokemon = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  return await response.json();
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const query = searchParams.get("q");

  const pokemonSearch = async (pokemonName) => {
    const data = await getPokemon(pokemonName);
    setPokemon(data);
    setIsLoading(false);
  };

  useEffect(() => {
    pokemonSearch(query);
  }, [query]);

  console.log(pokemon, "eu");

  return (
    <>
      <Header />
      <BackArrowButton />
      <Pokedex>
        {/* {query !== pokemon.name && (
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Pokemon not found
          </p>
        )} */}
        <Cards>
          {!isloading ? (
            <Card
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types.map((pokemon) => pokemon.type.name)}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Cards>
      </Pokedex>
      <Footer />
    </>
  );
};

export { Search };
