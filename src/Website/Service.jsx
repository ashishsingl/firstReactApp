import React from "react";
import cardImg from "../image/about3.jpg";
import Card from './Card'
import Api from './Api'
import './website.css'

const Service = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <h1 className="text-center my-5">Our Services</h1>
        <div className="container-fluid col-md-10 col-12 my-5">
          <div className="row gy-4">
            {
              Api.map((props, ind)=>{
                return( 
                <Card key={ind} cardImg = {props.imagePath} serviceName={props.serviceName} />
                )
              })
            }
            {/* <Card cardImg = {cardImg}/>
            <Card cardImg = {cardImg}/>
            <Card cardImg = {cardImg}/>
            <Card cardImg = {cardImg}/>
            <Card cardImg = {cardImg}/>
            <Card cardImg = {cardImg}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
