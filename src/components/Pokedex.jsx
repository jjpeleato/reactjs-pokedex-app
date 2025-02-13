import { useCounter, useFetch } from "../hooks";
import { uri } from "../constants";
import { Loading } from "./Loading";
import { PokemonCard } from "./PokemonCard";

export const Pokedex = () => {
  const { counter, add, subtract, reset } = useCounter(1);
  const { data, isLoading } = useFetch(`${uri}/${counter}`);

  return (
    <>
      <h1>Pokédex</h1>
      <button className="btn btn-primary" onClick={() => subtract()}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => add()}>
        Next
      </button>
      <hr />
      {isLoading ? (
        <Loading />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]}
        />
      )}
    </>
  );
};
