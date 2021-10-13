import React from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/CharacterCard.js";
import { PlanetCard } from "../component/PlanetCard";

export const Home = () => (
	<>
		<div className="container">
			<h2>Characters</h2>
			<CharacterCard />
			<h2>Planets</h2>
			<PlanetCard />
		</div>
	</>
);
