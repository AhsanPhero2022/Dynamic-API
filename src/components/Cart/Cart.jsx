import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  console.log(props.blog);
  const { blog_cover_img, blog_title, read_time, author_image, author_name } =
    props.blog;
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl mb-5">
        <figure>
          <img className="w-full p-6" src={blog_cover_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={author_image}
                alt=""
              />
              <div>
                <h3 className="font-bold">{author_name}</h3>
                <div>
                  <p className="text-sm">Mar 14 (4 Days ago)</p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <span>{read_time}</span>
              marks as read
              <button>
                <FontAwesomeIcon icon={faBookBookmark} />
              </button>
            </div>
          </div>

          <h2 className="card-title">{blog_title}</h2>
          <div className="">
            <p className="text-blue-500">#programming</p>
            <p className="text-blue-500 ml-28 -mt-4">#programming</p>
          </div>
          <div>
            <button className="text-blue-500 underline">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
