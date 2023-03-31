import React from "react";

let imgName = 0;
const Bookmarks = ({ title }) => {
  for (const titles of title) {
    let imgName = titles.blog_title;
  }

  return (
    <div>
      <div>
        <h1>Bookmarked Blogs: {title.length}</h1>
      </div>
      <div>
        <h1>hi{imgName}</h1>
      </div>
    </div>
  );
};

export default Bookmarks;
