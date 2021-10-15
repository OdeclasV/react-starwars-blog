import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = React.useState({});
	const { id, type } = useParams();

	// const myObject = {
	//     character: store.characterList,
	//     planet: store.planetList
	// }
	useEffect(() => {
		// condition: if planet map planets
		// else map character
		// ternary, if planet muestra attributes de planet

		store.characterList.map((myCharacter, index) => {
			// type tiene que coincidiar con character of planet
			if (index + 1 == id) {
				setCharacter(myCharacter);
			}
		});
	}, []);

	return (
		<>
			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h2 className="featurette-heading m-1">{character.name}</h2>
					<p className="lead">
						Im baby next level adaptogen drinking vinegar biodiesel VHS polaroid pickled 90s brooklyn godard
						cold-pressed flexitarian aesthetic ennui retro. Williamsburg dreamcatcher beard venmo cray fam
						bushwick brunch.
					</p>
					<hr />
					<h4>Details</h4>
					<div className="row">
						<p>DOB: {character.birth_year}</p>
						<p>Height: {character.height}</p>
						{/* <p>Population: {planet.population}</p>
						<p>Gravity: {planet.gravity}</p> */}
					</div>
				</div>
				<div className="col-md-7 order-md-1">
					<img
						className="featurette-image img-fluid mx-auto"
						src="https://1000logos.net/wp-content/uploads/2017/06/StarWars-Logo-1977.jpg"
						style={characterDetailStyles}
					/>
				</div>
			</div>
		</>
	);
};

const characterDetailStyles = {
	width: "300px"
};
