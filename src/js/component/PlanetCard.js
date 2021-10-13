import React from "react";
import { Route, Link } from "react-router-dom";

export const PlanetCard = () => {
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

	return (
		<>
			<div className="row planets">
				{listOfPlanets.map((planet, index) => {
					return (
						<div className="col-md-4" key={index}>
							<div className=" card mb-4 box-shadow">
								<img
									className="card-img-top"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"
									style={planetCardStyles}
								/>
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">Terrain: {planet.terrain}</p>
									<p className="card-text">Climate: {planet.climate}</p>
									<p className="card-text">Population: {planet.population}</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<Link to={`/planet_details/${index + 1}`}>
												<button type="button" className="btn btn-sm btn-outline-secondary">
													More details
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

const planetCardStyles = {
	height: "225px",
	width: "100%",
	display: "block"
};
