import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostData(data));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setCommentData(data));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotoData(data));
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

  console.log(finalResult.slice(0, 20));
  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
};

export default App;
