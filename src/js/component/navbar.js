import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="navbar-brand m-1"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"
					style={{ width: "80px" }}
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
