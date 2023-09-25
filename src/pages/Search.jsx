import { Header, Pokedex, Card, Footer, BackArrowButton } from "../components";
import { Cards } from "./Home";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/getPokemon";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const query = searchParams.get("q");

  const fetchPokemon = async (pokemonName) => {
    try {
      setIsLoading(true);
      const data = await getPokemon(pokemonName);
      setPokemon(data);
    } catch (err) {
      setPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(query);
  }, [query]);

  return (
    <main>
      <Header />
      <BackArrowButton />
      <Pokedex>
        <Cards>
          {isloading && <p>loading...</p>}
          {pokemon && !isloading && (
            <Link to={`/details/${pokemon.name}`}>
              <Card
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                types={pokemon.types.map((pokemon) => pokemon.type.name)}
              />
            </Link>
          )}
          {!pokemon && !isloading && <p>Pokemon not found</p>}
        </Cards>
      </Pokedex>
      <Footer />
    </main>
  );
};

export { Search };
