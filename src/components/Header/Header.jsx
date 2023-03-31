import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1 font-bold text-3xl">
          <h1>About blog programmer</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <ul className="flex mr-5 gap-5 ">
              <li className="hover:text-cyan-500">Home</li>
              <li className="hover:text-cyan-500">About</li>
              <li className="hover:text-cyan-500">Blog</li>
              <li className="hover:text-cyan-500">Testimonial</li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
