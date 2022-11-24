import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, notification, Row, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Author from "../../components/Author";
import Comment from "../../components/Comment";
import { deletePost } from "../../redux/action/cardAction";
import "./Home.styles.css";

const Home = () => {
  const { totalResult } = useSelector((state) => state?.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDele = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    dispatch(deletePost(id));
    notification.success({
      message: "Delete Successfully",
    });
  };

  const handleDetials = (id) => {
    navigate(`/blog/details/${id}`);
  };

  return (
    <div className="container">
      {totalResult ? (
        <Row>
          {totalResult?.map((item, index) => (
            <Col className="gutter-row" lg={8} key={index}>
              <div className="home-card-wrapper">
                <h2
                  className="postTitle"
                  onClick={() => handleDetials(item?.id)}
                >
                  {item?.title}
                </h2>
                <Author id={item?.userId} />
                <Comment id={item?.id} />
                <div className="deleteButtonWrapper">
                  <Button type="primary" onClick={() => handleDele(item?.id)}>
                    <DeleteOutlined />
                    Delete
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default Home;
