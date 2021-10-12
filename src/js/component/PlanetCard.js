import React from "react";
import { Route, Link } from "react-router-dom";

export const PlanetCard = ({ match }) => {
	const [listOfPlanets, setListOfPlanets] = React.useState([]);

	React.useEffect(() => {
		console.log("useEffect on Planets called!");
		fetch("https://swapi.dev/api/planets")
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				console.log("fetching planets");
				return response.json();
			})
			.then(data => setListOfPlanets(data.results));
	}, []);

	console.log(listOfPlanets[3]);

	return (
		<>
			<div className="planets d-flex">
				{listOfPlanets.map((planet, index) => {
					console.log(planet);
					console.log(index);
					return (
						<div className="card m-3 w-25" key={index}>
							<img
								className="card-img-top"
								src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
							/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-text">Terrain: {planet.terrain}</p>
								<p className="card-text">Climate: {planet.climate}</p>
								<p className="card-text">Population: {planet.population}</p>
								<Link
									to={`/planet_details/${index + 1}`}
									className="btn btn-primary"
									onClick={() => console.log(match)}>
									More details
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
