const Bookmarks = ({ title }) => {
  return (
    <div className="p-4 sticky top-28 bg-cyan-300 rounded">
      <div>
        <h1>Bookmarked Blogs: {title.length}</h1>
      </div>
    </div>
  );
};

export default Bookmarks;
