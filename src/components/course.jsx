import React from "react";
import Card from "./card"
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"
import axios from "axios";
import { useState, useEffect } from "react";



function course(){
  const [Books, setBooks] = useState([]);
  
  // const [selectProducts, setSelectProducts] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://freetestapi.com/api/v1/books");
        console.log(response);
        debugger
        
        if (response.status === 200) {
          const data = await response.json();
          const Books = data.Books;
          setBooks(Books);
        } else {
          alert("data not available");
        }
      } catch (error) {
        alert("Books are not available");
      }
    };
  
    fetchBooks ();
  }, []);
    return (
    <>
          <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
              <h1 className="text-2xl  md:text-4xl">
                We're delighted to have you{" "}
                <span className="text-pink-500"> Here! :)</span>
              </h1>
              <p className="mt-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                assumenda? Repellendus, iste corrupti? Tempore laudantium
                repellendus accusamus accusantium sed architecto odio, nisi expedita
                quas quidem nesciunt debitis dolore non aspernatur praesentium
                assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
                animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
                consequatur!
              </p>
              <Link to="/">
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Back
                </button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {Books.map((item)=>{
                <Card key={item.id} item={item}/>
              })};
                
              
            </div>
          </div>
         
        </>
      );
    }
    
    export default course;
