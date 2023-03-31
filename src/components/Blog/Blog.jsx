import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Blog = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      <div className="col-span-2 mx-auto my-5">
        {data.map((singleBlog) => (
          <Cart blog={singleBlog} key={singleBlog.id} />
        ))}
      </div>
      <div>
        <h1>book marks area</h1>
      </div>
    </div>
  );
};

export default Blog;
