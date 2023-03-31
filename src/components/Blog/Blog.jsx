import React, { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json)
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      <div className="col-span-2 mx-auto my-5">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>book marks area</h1>
      </div>
    </div>
  );
};

export default Blog;
