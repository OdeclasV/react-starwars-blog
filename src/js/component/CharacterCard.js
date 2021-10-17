import React, { useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="row planets">
				{store.characterList.map((character, index) => {
					return (
						<div className="col-md-4" key={index}>
							<div className=" card mb-4 box-shadow">
								<img
									className="card-img-top"
									src="data:image/png;base64,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"
									style={planetCardStyles}
								/>
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>
									<p className="card-text">Gender: {character.gender}</p>
									<p className="card-text">DOB: {character.birth_year}</p>
									<p className="card-text">Height: {character.height}</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<Link to={`/details/character/${index + 1}`} className="m-1">
												<button type="button" className="btn btn-sm btn-outline-secondary">
													More details
												</button>
											</Link>
											<button
												type="button"
												className="btn btn-sm btn-outline-warning"
												style={{ marginLeft: "20px" }}
												onClick={() => actions.showFavorite(character.name)}>
												<i className="far fa-heart" />
											</button>
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
