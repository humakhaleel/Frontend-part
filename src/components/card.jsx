import React, { useEffect, useState } from "react";

function Card({item}) {
    // console.log(item)
  
    // const fetchBooks = async () => {
    //   try {
    //     const response = await fetch("https://dummyjson.com/products");
    //     // console.log(response);

    //     // debugger
    //     const products = await response.json();
    //     setProducts(products);
    //   } catch (error) {
    //     setError(error);
    //   }
    // };
   
  // if (error) {
  //   return <div>Error :{error.messeage}</div>;
  // }

 
// const handleSelectedproducts = (productsdetails)=>{
// setSelectProducts(productsdetails);
// }
  return (
    <>
      {/* <div>
      {products.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
    </>
  );
} */}

      <div className="mt-4 my-3 p-3">/
        <h1>{item.title}</h1>
      <img src={item.images} alt="" />
        <p>Price: {item.price}</p>
        <p>Rating: {item.rating}</p>

        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          {/* <figure width="75px">
            <img
              src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=626&ext=jpg&ga=GA1.1.968925204.1707545913&semt=sphhttps://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="book-img"
            />
          </figure> */}
          {/* <div>
            {products.map((item) => (
              <div className="card-body">
                <h2 className="card-title">
                  {item.id}

                  <div className="badge badge-secondary">{item.title}</div>
                </h2>

                <div className="card-actions justify-between">
                  <div className="badge badge-outline">{item.description}</div>
                  <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    Free Book
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div className="card-body">
            <h2 className="card-title">
               {item.title}

              <div className="badge badge-secondary"></div>
            </h2>
            <p></p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">$</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Free Book
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
