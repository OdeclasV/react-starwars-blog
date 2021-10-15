import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = React.useState({});
	const { id } = useParams();

	// go to to store
	// filter array to find id (to store.planetList)
	// save it in local hook to update state (useState)

	useEffect(() => {
		store.planetList.map((myPlanet, index) => {
			if (index + 1 == id) {
				setPlanet(myPlanet);
			}
		});
	}, []);

	//console.log(planet);

	return (
		<>
			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h2 className="featurette-heading m-1">{planet.name}</h2>
					<p className="lead">
						Im baby next level adaptogen drinking vinegar biodiesel VHS polaroid pickled 90s brooklyn godard
						cold-pressed flexitarian aesthetic ennui retro. Williamsburg dreamcatcher beard venmo cray fam
						bushwick brunch.
					</p>
					<hr />
					<h4>Details</h4>
					<div className="row">
						<p>Climate: {planet.climate}</p>
						<p>Terrain: {planet.terrain}</p>
						<p>Population: {planet.population}</p>
						<p>Gravity: {planet.gravity}</p>
					</div>
				</div>
				<div className="col-md-7 order-md-1">
					<img
						className="featurette-image img-fluid mx-auto"
						src="https://bit.ly/3DCFNHJ"
						style={planetDetailStyles}
					/>
				</div>
			</div>
		</>
	);
};

const planetDetailStyles = {
	width: "300px"
};
