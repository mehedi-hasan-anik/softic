import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./SingleCardPage.styles.css";

const SingleCardPage = () => {
  const { totalResult } = useSelector((state) => state?.result);
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState(null);

  useEffect(() => {
    const result = totalResult?.find(
      (element) => Number(element?.id) === Number(id)
    );
    setSingleBlog(result);
  }, [id, totalResult]);

  console.log("singleBlog", singleBlog);

  return (
    <div className="container">
      <div className="imgWrapper">
        <img src={singleBlog?.thumbnailUrl} alt="user" />
      </div>
      <div className="detailsWrappr">
        <h4>{singleBlog?.title}</h4>
        <p>{singleBlog?.body}</p>
      </div>
      <div className="userWrapper">
        <img src={singleBlog?.thumbnailUrl} alt="user" />
        <div>
          <h4 className="name">{singleBlog?.name}</h4>
          <p>{singleBlog?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;
