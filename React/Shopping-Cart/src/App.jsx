import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import ShoppingItem from "./ShoppingItem";

 function App() {
  const [data, setData]= useState("Null");
  useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
               setData(json);
            })
          },[])
          console.log(data);
  return (
    <>
    <LandingPage data={data}/>
    </>
  )
}

export default App
