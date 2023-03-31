import React from "react";

const Cart = (props) => {
  console.log(props.blog);
  const { blog_cover_img, blog_title, read_time } = props.blog;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
        <figure>
          <img src={blog_cover_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog_title}</h2>

          <div className="card-actions justify-end">
            <span>{read_time}</span>
            marks as read
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
