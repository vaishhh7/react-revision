import { useEffect } from "react";
import { useState } from "react";

export default function Users() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // are we loading users?? yes- if false was herre then comp would think theat data is already here even tho we havent fetched yet
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // this is a mock api with fake user data
      // this is a default list of people and their details

      // fetch is a built in java script to get data from url its like litrally fetching data from somewhere
      .then((res) => res.json())

      // the server basically sends them a response which is a json text .json() method converst the response into javascript object
      .then((data) => {
        setUser(data);
        setLoading(false); // tells react we are done loading for now
      })

      // if something goes wrong  (like net gone) catch catches error

      .catch((err) => {
        setError(err.message); // this err.message is the error message from fetch
        setLoading(false); // stop loading if theres an error
      });
  }, []); // this means useEffect works only onc ewhen the comp first appers- if we dont put this then it would run evertime our component updates

  if (loading) return <h1>Loading Users..</h1>;
  if (error) return <h2> Error: {error}</h2>;
  return (
    <ul>
      {/* unordered list and li is list item */}

      {/* so we go through all users in array and  u.id is the id of each person in that list now we will show the name */}
      {user.map((u) => (
        <li key={u.id}>
          {" "}
          {u.name}: Latitude: {u.address.geo.lat} Longitude: {u.address.geo.lon}
        </li>
      ))}
    </ul>
  );
}


/*
if there is no internet connection we get
Error:  Failed to fetch

wrong url
Error: 404 Not Found

*/