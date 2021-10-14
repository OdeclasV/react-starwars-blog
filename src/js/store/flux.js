const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetList: []
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
			}

			//reset the global store
			// setStore({ demo: demo });
		}
	};
};

export default getState;
