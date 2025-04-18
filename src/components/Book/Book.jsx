import React from "react";
import { Star } from "lucide-react";

const Book = ({ book }) => {
  const { bookName, author, image, tags, yearOfPublishing, category, rating
  } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-3">
      <figure>
        <img className="w-1/2 md:w-2/5" src={image} alt="Books" />
      </figure>
      <div className="mt-10 space-x-10">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="badge bg-green-50 p-4 text-green-600 rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing
          }</div>
        </h2>
        <div></div>
        <div>
          <p className="text-start text-gray-500 font-bold text-md">
            By: {author}
          </p>
        </div>
        <div className="justify-between flex items-center mt-5 border-t border-dotted pt-5">
            <div>{category}</div>
            <div className="flex justify-end items-center gap-3">{rating}  <span><Star /> </span></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
