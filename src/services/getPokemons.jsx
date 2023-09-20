const getPokemons = async (limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  return await response.json();
};

export { getPokemons };
