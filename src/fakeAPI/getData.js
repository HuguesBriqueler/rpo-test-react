import { sortByLastName } from "../components/utils/sortByLastName";

// getData function
// This function is used to fetch the fake data in public/fakeData.json
// It populates the users state with the sorted data
// It also sets the isLoading state to false when the fetching process is finished

export function getData({ setUsers, setIsLoading }) {
  return fetch("fakeData.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      setUsers(sortByLastName(myJson));
      setIsLoading(false);
    });
}
