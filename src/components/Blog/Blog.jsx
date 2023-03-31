import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blog = () => {
  const [data, setData] = useState([]);
  const [title, setTile] = useState([]);

  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAddToBlog = (blog) => {
    const newTile = [...title, blog];
    setTile(newTile);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      <div className="col-span-2 mx-auto my-5">
        {data.map((singleBlog) => (
          <Cart
            blog={singleBlog}
            key={singleBlog.id}
            handleAddToBlog={handleAddToBlog}
          />
        ))}
      </div>
      <Bookmarks title={title} />
    </div>
  );
};

export default Blog;
