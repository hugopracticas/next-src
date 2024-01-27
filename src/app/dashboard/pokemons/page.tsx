import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import PokemonGrid from "@/app/pokemons/components/PokemonGrid";
import Image from "next/image";

const getPokemons = async(limit = 80, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then( resp => resp.json() )

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  //throw new Error('Esto es un error que no deberia de suceder')
  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      
      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>

      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}