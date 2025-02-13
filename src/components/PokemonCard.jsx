import PropTypes from "prop-types";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img key={btoa(sprite)} src={sprite} alt={name} title={name} />
        ))}
      </div>
    </section>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired,
};
