import { useEffect, useState } from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";

function LandingPage(){
    const [data, setData]= useState("Null");
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=>{
                 setData(json);
              })
            },[])
    return (
        <>
        <Navbar />
        <div className="LandingText">
            <h1>Your one-stop destination for all your shopping needs</h1>
            <p>Shop from the comfort of your home and get everything delivered to you
            Discover an unparalleled shopping experience with our extensive selection of products, unbeatable prices, and exceptional customer service. Shop now and transform your shopping journey with us.</p>
            <a href="#Gallery"><button>Shop Now</button></a>
        </div>
        <div id="Gallery" className="GalleryHome">
            <Cards data={data[0]}/>
            <Cards data={data[1]}/>
            <Cards data={data[2]}/>
            <Cards data={data[3]}/>
            <Cards data={data[4]}/>
            <Cards data={data[5]}/>
            <Cards data={data[6]}/>
            <Cards data={data[7]}/>
            <Cards data={data[8]}/>
            <Cards data={data[9]}/>
            <Cards data={data[10]}/>
            <Cards data={data[11]}/>
            <Cards data={data[12]}/>
            <Cards data={data[13]}/>
            <Cards data={data[14]}/>
            <Cards data={data[15]}/>
            <Cards data={data[16]}/>
            <Cards data={data[17]}/>
            <Cards data={data[18]}/>
            <Cards data={data[19]}/>    
        </div>
        </>
    );
}

export default LandingPage;