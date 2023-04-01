import Alltitle from "../Alltitle/Alltitle";

const Bookmarks = ({ title }) => {
  return (
    <div className="p-4 sticky top-40 bg-cyan-300 rounded">
      <div>
        <h1 className="text-2xl">Bookmarked Blogs: {title.length}</h1>
        {title.map((singleTitle) => (
          <Alltitle singleTitle={singleTitle} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
