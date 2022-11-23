import React, { useEffect, useState } from "react";
import "./AuthorDetials.styles.css";

const AuthorDetials = ({ id }) => {
  const [authorData, setAuthorData] = useState(null);
  const [authorPhoto, setAuthorPhoto] = useState(null);
  console.log(authorData);

  const fetchAuthor = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const result = await response.json();
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
    <div className="authorDetailsWrapper">
      <img src={authorPhoto?.thumbnailUrl} alt={authorData?.name} />
      <div className="authorDetails">
        <p>
          Name: <span className="commonDetails">{authorData?.name}</span>
        </p>
        <p>
          Email: <span className="commonDetails">{authorData?.email}</span>
        </p>
        <p>
          Phone: <span className="commonDetails">{authorData?.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthorDetials;
