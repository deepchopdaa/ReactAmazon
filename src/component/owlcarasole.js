import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image1 from "../images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
import image2 from "../images/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
import image3 from "../images/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
import image4 from "../images/186x116---wm._SY116_CB667322346_.jpg"
import Productcard from "./ProductCard";
import "./style.css"
const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,   
        },
        1300: {
            items: 5,
        },
        1500: {
            items: 7,
        },
    },
};
const options1 = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
        },
        300: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1300: {
            items: 6,
        },
        1500: {
            items: 8,
        },
    },
};

let data2= {
    title:"Air condiotioner",
    description:"Loyyed 5 star fully automatic air conditioner with great prize on amazon , best deal suggest",
    price:"price : 26000"
}
let data1= {
    title:"Regrigerator",
    description:"samsang 5 star fully automatic Refrigerator with great prize on amazon , best deal suggest",
    price:"price : 43000"
}
let data3= {
    title:"Microwave oven",
    description:"infinix 3 star microwave oven for beake your test with great prize on amazon",
    price:"price : 8000"
}
let data4= {
    title:"Whasing machine",
    description:"IFB 4 star fully automaticoven & 7kg your with great prize on amazon",
    price:"price : 29000"
}

const CarouselComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? (
        <>
            <div className="container"> 

            <div style={{textAlign:"left",fontSize:"large",paddingLeft:"20px"}}>
                <p>Up to 80% off | Handcrafted products from artisans <a href="#" style={{color:"blue"}}> See More</a> </p>
            </div>
            <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                    <img src={image1} alt="product image" />
                </div>
                <div className="item">
                    <img src={image2} alt="product image" />
                </div>
                <div className="item">
                    <img src={image3} alt="product image" />
                </div>
                <div className="item">
                    <img src={image1} alt="product image" />
                </div>
                <div className="item">
                    <img src={image4} alt="product image" />
                </div>  
                <div className="item">
                    <img src={image2} alt="product image" />
                </div>
                <div className="item">
                    <img src={image3} alt="product image" />
                </div>
                <div className="item">
                    <img src={image1} alt="product image" />
                </div>
                <div className="item">
                    <img src={image4} alt="product image" />
                </div>

            </OwlCarousel>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{textAlign:"left",fontSize:"large",paddingLeft:"20px"}}>
                <p>Inspired by your browsing history
                    {/*  <a href="#" style={{color:"blue"}}> See More</a> */} </p>
            </div>
            <OwlCarousel className="owl-theme" {...options1}>
                <div className="item">
                    <Productcard image={image1} data={data1}/>
                </div>
                <div className="item">
                    <Productcard image={image2} data={data2}/>
                </div>
                <div className="item">
                    <Productcard image={image3} data={data3}/>
                </div>
                <div className="item">
                    <Productcard image={image4} data={data4}/>
                </div>
                <div className="item">
                    <Productcard image={image2} data={data2}/>
                </div>
                <div className="item">
                    <Productcard image={image3} data={data3}/>
                </div>
                <div className="item">
                    <Productcard image={image4} data={data4}/>
                </div>
                <div className="item">
                    <Productcard image={image2} data={data2}/>
                </div>
                <div className="item">
                    <Productcard image={image3} data={data3}/>
                </div>
                <div className="item">
                    <Productcard image={image4} data={data4}/>
                </div>
                
            </OwlCarousel>
        </>
    ) : null;
};

export default CarouselComponent;
