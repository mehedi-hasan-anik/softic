import React, { useEffect, useState } from "react";
import "./Comment.styles.css";

const Comment = ({ id }) => {
  const [comments, setComments] = useState(null);

  const handleComments = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const result = await response.json();
      setComments(result);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleComments(id);
  }, [id]);

  return (
    <div className="commentsWrapper">
      <h3>Comments ({comments?.length})</h3>
      <ul>
        {comments?.map((item, index) => (
          <li key={index}>
            <p className="authorComment">{item?.body}</p>
            <p className="authorName">
              {item?.email ? item.email.split("@")[0] : ""}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
