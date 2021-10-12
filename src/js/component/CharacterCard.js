import React, { useEffect } from "react";

export const CharacterCard = () => {
	//const [newCard, setNewCard] = React.useState("");
	const [characters, setCharacters] = React.useState([]);

	React.useEffect(() => {
		console.log("useEffect on Characters called!");
		fetch("https://swapi.dev/api/people")
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				console.log("fetching characters");
				return response.json();
			})
			.then(data => setCharacters(data.results));
	}, []);

	return (
		<>
			<div className="card-group">
				{characters.map((character, index) => {
					return (
						<div className="card" key={index}>
							<img
								className="card-img-top"
								src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
							/>
							<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-text">Gender: {character.gender}</p>
								<p className="card-text">DOB: {character.birth_year}</p>
								<p className="card-text">Height: {character.height}</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
