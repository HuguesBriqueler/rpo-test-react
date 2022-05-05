// populate users const with fake data from https://random-data-api.com/api/users/random_user
const populate = async () => {
  const response = await fetch(
    "https://random-data-api.com/api/users/random_user?size=10"
  );
  const data = await response.json();
  console.log(data);
  return data.results.map((user) => {
    return {
      id: user.id,
      name: user.first_name,
      username: user.last_name,
      email: user.email,
    };
  });
};

// export initial_data with users.uid, users.first_name, users.last_name, users.email.
export const initial_data = populate();

export const usersData = [
  {
    id: 1939,
    first_name: "Jackie",
    last_name: "Runolfsdottir",
    email: "jackie.runolfsdottir@email.com",
  },
  {
    id: 9170,
    first_name: "Pok",
    last_name: "Wunsch",
    email: "pok.wunsch@email.com",
  },
  {
    id: 3665,
    first_name: "Emile",
    last_name: "Mante",
    email: "emile.mante@email.com",
  },
  {
    id: 670,
    first_name: "Lavonna",
    last_name: "Rohan",
    email: "lavonna.rohan@email.com",
  },
  {
    id: 230,
    first_name: "Luther",
    last_name: "Grimes",
    email: "luther.grimes@email.com",
  },
  {
    id: 3541,
    first_name: "Ned",
    last_name: "Larson",
    email: "ned.larson@email.com",
  },
  {
    id: 3054,
    first_name: "Susie",
    last_name: "McKenzie",
    email: "susie.mckenzie@email.com",
  },
  {
    id: 1992,
    first_name: "Alpha",
    last_name: "Mitchell",
    email: "alpha.mitchell@email.com",
  },
  {
    id: 152,
    first_name: "Winona",
    last_name: "Hartmann",
    email: "winona.hartmann@email.com",
  },
  {
    id: 6514,
    first_name: "Ernestina",
    last_name: "Romaguera",
    email: "ernestina.romaguera@email.com",
  },
];
