import React, { useEffect, useState } from "react";
import getRandomUser from "../helpers/User/getRandomUser";
import getPosts from "../helpers/Post/getPosts";

const FetchCard = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({ id: 0, name: "", email: "" });

  const getRandomUserData = () => {
    getRandomUser().then((dataUser) => setUser(dataUser));
  };

  const updatePosts = (userID) => {
    if (user.id) {
      setLoading(true);
      getPosts(userID).then((data) => setPosts(data));
      setLoading(false);
    }
  };

  // Se ejecuta solo la primera vez
  useEffect(() => {
    getRandomUserData();
  }, []);

  useEffect(() => {
    updatePosts(user.id);
  }, [user]);

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <button onClick={getRandomUserData}>Random User</button>
      <br />
      {!loading && (
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default FetchCard;
