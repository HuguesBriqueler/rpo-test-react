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
      setUsers(myJson);
      setIsLoading(false);
    });
}
