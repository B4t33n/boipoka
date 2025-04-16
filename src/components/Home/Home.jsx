import React from "react";
import bannerImage from "../../assets/books.jpg"
import Books from "../Books/Books";

const Home = () => {
  return (
  <div>
      <div className="hero bg-base-200 h-[500px] my-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
        />
        <div className="space-y-3 md:space-y-8">
          <h1 className="text-2xl md:text-5xl md:w-3/4 md:leading-15 font-semibold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-success">View The List</button>
        </div>
      </div>
      
    </div>
    <div>
    <Books></Books>
    </div>
  </div>
  );
};

export default Home;
