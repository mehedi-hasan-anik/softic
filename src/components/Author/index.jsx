import React, { useEffect, useState } from "react";

const Author = ({ id }) => {
  const [authorData, setAuthorData] = useState(null);
  const [authorPhoto, setAuthorPhoto] = useState(null);

  const fetchAuthor = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const result = await response.json();
      console.log("result", result);
      setAuthorData(result);
    } catch (err) {
      console.log("error", err);
    }
  };
  const fetchPhoto = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const result = await response.json();
      setAuthorPhoto(result);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchAuthor(id);
    fetchPhoto(id);
  }, [id]);

  return (
    <div>
      <img src={authorPhoto?.thumbnailUrl} alt={authorData?.name} />
      <h3>{authorData?.name}</h3>
    </div>
  );
};

export default Author;
