const getRandomUser = async () => {
  const max = 10,
    min = 1;
  const userID = Math.floor(Math.random() * (max - min + 1) + min);
  const url = `https://jsonplaceholder.typicode.com/users/${userID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default getRandomUser;
