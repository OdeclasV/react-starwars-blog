import React, { useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="row planets">
				{store.planetList.map((planet, index) => {
					return (
						<div className="col-md-4" key={index}>
							<div className=" card mb-4 box-shadow">
								<img
									className="card-img-top"
									src="https://1000logos.net/wp-content/uploads/2017/06/StarWars-Logo-1977.jpg"
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
