import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext.js";

const Single = () => {
  const [post, setPost] = useState({});
  const postId = useLocation().pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_ORIGIN}/api/posts/${postId}`,
          {
            withCredentials: true,
          }
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_ORIGIN}/api/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post?.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=${postId}`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <p>{post?.desc}</p>
      </div>
      <div className="menu">
        <Menu cat={post?.cat} />
      </div>
    </div>
  );
};

export default Single;
