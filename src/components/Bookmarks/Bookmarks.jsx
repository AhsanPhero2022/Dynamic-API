import Alltitle from "./Alltitle";

const Bookmarks = ({ title }) => {
  console.log(title);
  return (
    <div className="p-4 sticky top-28 bg-cyan-300 rounded">
      <div>
        <h1>Bookmarked Blogs: {title.length}</h1>
        {title.map((singleTitle) => (
          <Alltitle singleTitle={singleTitle} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
