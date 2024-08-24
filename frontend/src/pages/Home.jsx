import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts${cat}`, {
          withCredentials: true,
        });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi possimus molestias culpa itaque, voluptatibus libero accusamus necessitatibus quos facilis! Totam fugit mollitia nisi iure accusamus, nesciunt eveniet. Temporibus, nulla.",
  //     img: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi possimus molestias culpa itaque, voluptatibus libero accusamus necessitatibus quos facilis! Totam fugit mollitia nisi iure accusamus, nesciunt eveniet. Temporibus, nulla.",
  //     img: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi possimus molestias culpa itaque, voluptatibus libero accusamus necessitatibus quos facilis! Totam fugit mollitia nisi iure accusamus, nesciunt eveniet. Temporibus, nulla.",
  //     img: "https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi possimus molestias culpa itaque, voluptatibus libero accusamus necessitatibus quos facilis! Totam fugit mollitia nisi iure accusamus, nesciunt eveniet. Temporibus, nulla.",
  //     img: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi possimus molestias culpa itaque, voluptatibus libero accusamus necessitatibus quos facilis! Totam fugit mollitia nisi iure accusamus, nesciunt eveniet. Temporibus, nulla.",
  //     img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 6,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sint.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi possimus molestias culpa itaque, voluptatibus libero accusamus necessitatibus quos facilis! Totam fugit mollitia nisi iure accusamus, nesciunt eveniet. Temporibus, nulla.",
  //     img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
