const getPostCard = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  const res = await fetch(url);
  const post = await res.json();
  return post;
};

export default getPostCard;
