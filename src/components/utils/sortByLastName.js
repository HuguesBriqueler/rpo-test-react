// sortByLastName function
// This function is used to sort the users array by last name
// It returns the sorted array
// It accesses the lowered case of the last_name property
// and compares it to the lowered case of the other users last_name property
// It returns -1 if the current user's last_name is lower than the other user's last_name
// It returns 1 if the current user's last_name is greater than the other user's last_name
// It returns 0 if the current user's last_name is equal to the other user's last_name
// so that the objects in array are sorted by last name

export function sortByLastName(users) {
  return users.sort((a, b) => {
    if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) {
      return -1;
    }
    if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}
