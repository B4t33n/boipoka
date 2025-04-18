import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { Id } = useParams();
  const id = parseInt(Id);
  const bookData = useLoaderData();
  const singleBook = bookData.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    review,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    category,
    rating,
  } = singleBook;
  console.log(singleBook);
  return (
    <div className="hero">
      <div className="hero-content items-start flex-col lg:flex-row">
        <div className="bg-base-300 rounded-lg">
          <img src={image} className="max-w-sm m-16 rounded-lg" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <h1 className="border-b border-t p-2 border-dashed text-lg my-3">
            {category}
          </h1>
          <p className="py-6">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-10 border-b pb-10">
            Tag:
            {tags.map((tag, index) => (
              <p
                key={index}
                className="bg-green-50 px-2 py-1 text-green-500 rounded-lg"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="space-y-5 text-gray-500 font-semibold py-4">
            <h1>Number of Pages: <span className="pl-20 text-black">{totalPages}</span></h1>
            <p>Publisher: <span className="pl-32 text-black">{publisher}</span></p>
            <p>Year of Publishing: <span className="pl-16 text-black"> {yearOfPublishing}</span></p>
            <p>Rating: <span className="pl-38 text-black">{rating}</span></p>
          </div>
          <button className="btn btn-primary mr-2">Get Started</button>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
