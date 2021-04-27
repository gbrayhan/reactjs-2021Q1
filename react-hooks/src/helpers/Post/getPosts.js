const getPosts = async (userID) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default getPosts;
