import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { totalData } from "../../redux/action/cardAction";
import "./SingleCard.styles.css";

const SingleCard = ({ item }) => {
  const { totalResult } = useSelector((state) => state?.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (element) => {
    const result = totalResult.filter(
      (singleItem) => singleItem?.id !== element?.id
    );
    dispatch(totalData(result));
    localStorage.setItem("reduxData", JSON.stringify(result));
  };

  const handleDetailsPage = (id) => {
    navigate(`/blog/details/${id}`);
  };

  return (
    <div className="home-card-wrapper">
      <div className="user-name-and-img">
        <img src={item?.thumbnailUrl} alt="user" />
        <h2 className="name" onClick={() => handleDetailsPage(item?.id)}>
          {item?.name}
        </h2>
      </div>
      <div className="details">
        <h4 onClick={() => handleDetailsPage(item?.id)}>{item?.title}</h4>
        <p>{item?.body}</p>
      </div>
      <Button type="primary" onClick={() => handleDelete(item)}>
        <DeleteOutlined />
        Delete
      </Button>
    </div>
  );
};

export default SingleCard;
