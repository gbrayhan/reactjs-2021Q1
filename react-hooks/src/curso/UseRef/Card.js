import React, {useEffect, useRef, useState} from "react";
import getPostCard from "./getPostCard";

const Card = () => {
  const [post, setPost] = useState({title: "Post-1"});
  const [loading, setLoading] = useState(false);

  const isMountedRef = useRef(true);

  const getDataCard = () => {
    setLoading(true);
    getPostCard().then((data) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(data);
          setLoading(false);
        }
      }, 1000)

    });
  };

  // solo un a vez
  useEffect(() => {
    getDataCard();
    return () => {
      isMountedRef.current = false;
    }
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <h1>{post.name}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
