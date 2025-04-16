import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image, tags } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="w-2/5" src={image} alt="Shoes" />
      </figure>
      <div className="mt-10 space-x-10">
        {tags.map((tag,index) => (
          <div key={index} className="badge bg-green-50 p-4 text-green-600 rounded-full">{tag}</div>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div>
        </div>
        <div className="card-actions justify-around">

        </div>
        <p className="text-start text-gray-500 font-bold text-md">By: {author}</p>
      </div>
    </div>
  );
};

export default Book;
