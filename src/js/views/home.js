import React from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/CharacterCard.js";
import { PlanetCard } from "../component/PlanetCard";

export const Home = () => (
	<>
		<CharacterCard />
		<PlanetCard />
	</>
);
