import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const booksData = useLoaderData();
    console.log(booksData);
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Books</h1>
            <div>
                {
                    booksData.map(book=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;