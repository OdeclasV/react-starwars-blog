const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetList: [],
			favoritesList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			getPlanets: () => {
				// get planets info from swapi
				fetch("https://swapi.dev/api/planets")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ planetList: data.results }));
			},

			getCharacters: () => {
				// get people info from swapi
				fetch("https://swapi.dev/api/people")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ characterList: data.results }));
			},

			showFavorite: nameOfFavorite => {
				let { favoritesList } = getStore();
				favoritesList.includes(nameOfFavorite) ? favoritesList : favoritesList.push(nameOfFavorite);
				setStore({ favoritesList: favoritesList });
			},

			deleteFavorite: favoriteToDelete => {
				let newFavorites = getStore().favoritesList.filter(favorite => {
					return favorite !== favoriteToDelete;
				});
				setStore({ favoritesList: newFavorites });
			}
		}
	};
};

export default getState;

// login log out button
// when page loads, see login button
//
