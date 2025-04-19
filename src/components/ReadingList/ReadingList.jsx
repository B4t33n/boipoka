import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";
import { getItems } from "../../utility/addToDB";
import WishList from "../WishList/WishList";

const ReadingList = () => {
    const [readingList, setReadingList]= useState([]);
    const[wishList, setWishList]= useState([]);
    const data = useLoaderData();

    useEffect(()=>{
        const readingData = getItems();
        const convertedData = readingData.map(id => parseInt(id))
        const myReadingList = data.filter(book => convertedData.includes(book.bookId));

        setReadingList(myReadingList);
    }, [data, setReadingList]);


    useEffect(()=>{
        const WishList = getItems();
        const convertedWishData = WishList.map(id => parseInt(id));
        const myWishList = data.filter(b=> convertedWishData.includes(b.bookId));
        setWishList(myWishList)
    }, [data,setWishList])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Reading LIst</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-20 my-10">
            {
                readingList.map(b => <Book key={b.bookId} book={b}></Book>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {
                wishList.map(w => <WishList key={w.bookId} b={w}></WishList>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadingList;
