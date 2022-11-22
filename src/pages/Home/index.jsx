import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../../components/SingleCard";
import { totalData } from "../../redux/action/cardAction";
import "./Home.styles.css";
// import SingleCard from "./"

const Home = () => {
  const { totalResult } = useSelector((state) => state?.result);
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const dispatch = useDispatch();

  const getPostData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  const getCommentData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setCommentData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  const getPhotoData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotoData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostData();
    getCommentData();
    getUserData();
    getPhotoData();
  }, []);

  useEffect(() => {
    const mergePostDataAndCommentData = postData?.map((postItem) => ({
      ...postItem,
      ...commentData?.find((commentItem) => commentItem.id === postItem.id),
    }));

    const mergePostDataAndCommentDataAndUserData =
      mergePostDataAndCommentData?.map((mergePostDataAndCommentDataItem) => ({
        ...mergePostDataAndCommentDataItem,
        ...userData?.find(
          (userDataItem) =>
            userDataItem.id === mergePostDataAndCommentDataItem.id
        ),
      }));

    const finalResult = mergePostDataAndCommentDataAndUserData?.map(
      (mergePostDataAndCommentDataAndUserDataItem) => ({
        ...mergePostDataAndCommentDataAndUserDataItem,
        ...photoData?.find(
          (photoDataItem) =>
            photoDataItem.id === mergePostDataAndCommentDataAndUserDataItem.id
        ),
      })
    );
    dispatch(totalData(finalResult?.slice(0, 20)));
    localStorage.setItem(
      "reduxData",
      JSON.stringify(finalResult?.slice(0, 20))
    );
  }, [postData, commentData, userData, photoData]);

  return (
    <div className="container">
      <Row>
        {totalResult?.map((item, index) => (
          <Col className="gutter-row" lg={8}>
            <SingleCard key={index} item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
