import React, { useEffect, useState } from "react";

const Home = () => {
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [photoData, setPhotoData] = useState(null);

  const getPostData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setPostData(await response.json());
  };

  const getCommentData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setCommentData(await response.json());
  };

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUserData(await response.json());
  };

  const getPhotoData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    setPhotoData(await response.json());
  };

  useEffect(() => {
    getPostData();
    getCommentData();
    getUserData();
    getPhotoData();
  }, []);

  const mergePostDataAndCommentData = postData?.map((postItem) => ({
    ...postItem,
    ...commentData?.find((commentItem) => commentItem.id === postItem.id),
  }));

  const mergePostDataAndCommentDataAndUserData =
    mergePostDataAndCommentData?.map((mergePostDataAndCommentDataItem) => ({
      ...mergePostDataAndCommentDataItem,
      ...userData?.find(
        (userDataItem) => userDataItem.id === mergePostDataAndCommentDataItem.id
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

  console.log(finalResult?.slice(0, 20));
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
