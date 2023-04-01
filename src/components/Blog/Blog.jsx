import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blog = () => {
  const [data, setData] = useState([]);
  const [title, setTile] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAddToBlog = (blog) => {
    const newTile = [...title, blog];
    setTile(newTile);
  };

  const handleAddToTime = (blog) => {
    const newTime = [...time, blog];
    setTime(newTime);
  };

  let totatTime = 0;
  for (let allTime of time) {
    totatTime = totatTime + allTime.read_time;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      <div className="col-span-2 mx-auto my-5">
        {data.map((singleBlog) => (
          <Cart
            data={data}
            blog={singleBlog}
            key={singleBlog.id}
            handleAddToTime={handleAddToTime}
            handleAddToBlog={handleAddToBlog}
          />
        ))}
      </div>
      <div>
        <div className="bg-green-300 p-5 rounded-lg sticky top-20">
          <h2 className="font-semibold">Spent time on read: {totatTime}</h2>
        </div>
        <Bookmarks title={title} />
      </div>
    </div>
  );
};

export default Blog;
