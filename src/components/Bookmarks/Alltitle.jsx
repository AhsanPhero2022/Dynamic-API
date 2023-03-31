import React from "react";

const Alltitle = (props) => {
  console.log(props.singleTitle.blog_title);
  return (
    <div className="m-4 bg-white p-2 rounded-lg">
      <h2 className="text-2xl text-cyan-500">{props.singleTitle.blog_title}</h2>
    </div>
  );
};

export default Alltitle;
