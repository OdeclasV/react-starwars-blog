import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// create dynamic class with ternary, either dropdown or dropdown menu show
// condinionted on flag variable above that keeps track of it
// if true, show class should show
// else dont show

//store.favotires list

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = React.useState(false);

	let show = "";
	if (dropdown) {
		show = "show";
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="navbar-brand"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"
					style={{ width: "80px", marginLeft: "150px" }}
				/>
			</Link>
			<div className="dropdown">
				<button
					className="nav-link dropdown-toggle btn btn-warning"
					style={{ color: "white" }}
					onClick={() => {
						setDropdown(!dropdown);
					}}
					type="button"
					id="navbarDropdownMenuLink"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites {store.favoritesList.length}
				</button>
				<div
					className={store.favoritesList.length > 0 ? "dropdown-menu " + show : "dropdown-menu"} // check if store has lenght, if not, dont show it, if yes, show it
					aria-labelledby="navbarDropdownMenuLink">
					{store.favoritesList.map((favorite, index) => {
						return (
							<li key={index} className="m-2 p-1">
								{favorite}
								<button
									className="fas fa-trash-alt btn"
									style={{ marginLeft: "15px" }}
									onClick={() => {
										actions.deleteFavorite(favorite);
									}}
								/>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
