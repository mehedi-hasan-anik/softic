import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Author from "../../components/Author";
import Comment from "../../components/Comment";
import { deletePost, totalData } from "../../redux/action/cardAction";
import "./Home.styles.css";

const Home = () => {
  const { totalResult } = useSelector((state) => state?.result);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPostData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_page=0&_limit=20"
      );
      dispatch(totalData(await response.json()));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDele = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    dispatch(deletePost(id));
  };

  const handleDetials = (id) => {
    navigate(`/blog/details/${id}`);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="container">
      <Row>
        {totalResult?.map((item, index) => (
          <Col className="gutter-row" lg={8} key={index}>
            <div className="home-card-wrapper">
              <h2 onClick={() => handleDetials(item?.id)}>{item?.title}</h2>
              <Author id={item.userId} />
              <Comment id={item?.id} />

              <Button type="primary" onClick={() => handleDele(item?.id)}>
                <DeleteOutlined />
                Delete
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
