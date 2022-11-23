import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./CommentDetails.styles.css";

const CommentDetails = ({ id }) => {
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
    <div className="detailsCommentsWrapper">
      <ul>
        {comments?.map((item, index) => (
          <li key={index}>
            <p className="authorComment">
              <ArrowRightOutlined />
              <span className="singleComment"> {item?.body}</span>
              <span className="detailsAuthorName">
                ({item?.email ? item.email.split("@")[0] : ""})
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentDetails;
