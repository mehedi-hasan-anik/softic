import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalData } from "../../redux/action/cardAction";
import "./SingleCard.styles.css";

const SingleCard = ({ item }) => {
  const { totalResult } = useSelector((state) => state?.result);
  const dispatch = useDispatch();

  const handleDelete = (element) => {
    const result = totalResult.filter(
      (singleItem) => singleItem?.id !== element?.id
    );
    dispatch(totalData(result));
  };

  return (
    <div className="home-card-wrapper">
      <div className="user-name-and-img">
        <img src={item?.thumbnailUrl} alt="user" />
        <h2 className="name">{item?.name}</h2>
      </div>
      <div className="details">
        <p>{item?.body}</p>
      </div>
      <Button type="primary" onClick={() => handleDelete(item)}>
        Delete
      </Button>
    </div>
  );
};

export default SingleCard;
