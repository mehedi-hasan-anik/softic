import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorDetials from "../../components/AuthorDetials";
import CommentDetails from "../../components/CommentDetails";
import "./SingleCardPage.styles.css";

const SingleCardPage = () => {
  const { totalResult } = useSelector((state) => state?.result);
  const [singlePostData, setSinglePostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const result = totalResult?.find((item) => Number(item?.id) === Number(id));
    setSinglePostData(result);
  }, [id, totalResult]);

  return (
    <div className="singlePageWrapper">
      <h1>{singlePostData?.title}</h1>
      {singlePostData && <AuthorDetials id={singlePostData?.userId} />}
      {singlePostData && <CommentDetails id={singlePostData?.id} />}
    </div>
  );
};

export default SingleCardPage;
