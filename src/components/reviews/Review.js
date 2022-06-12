import React from 'react'
import {useState,useEffect} from "react";
import "./review.css";
import data from "./data";
import {BsArrowLeftCircleFill} from "react-icons/bs";
import {BsArrowRightCircleFill} from "react-icons/bs";
const Review = () => {
const [index, setIndex] = useState(0);
const [list1, setList1] = useState(data);
useEffect(()=>{
  const lastIndex = list1.length-1;
  if(index<0){
    setIndex(lastIndex);
  }
  if(index>lastIndex){
    setIndex(0);
  }
},[index, list1]);
const handleRandom = () =>{
  const random = Math.floor(Math.random()*list1.length);
  setIndex(random);
}
useEffect(() => {
  let slider = setInterval(() => {
    setIndex(index + 1);
  }, 3000);
  return () => clearInterval(slider);
}, [index]);
  return (
    <section className='reviews'>
      <p>Review from friends</p>
      <h4>Testimonials</h4>
      <div className='review-box'>
      {list1.map((person,setInd)=>{
          const {id,image,title,review} = person;
          let position = "next-slide";
          if(index===setInd){
            position="curr-slide";
          }
          if(setInd === index-1 || (index===0 && setInd === list1.length-1)){
            position = "prev-slide";
          }
          return(
                <div key={id}  className={`abs-review ${position}`}>
            <div className='photo1'>
                <img src={image} alt="title" />
            </div>
              <h2>{title}</h2>
              <div onClick={()=>setIndex(index-1)} className='left-arrow'><BsArrowLeftCircleFill  className='left'/></div>
              <div onClick={()=>setIndex(index+1)} className='right-arrow'><BsArrowRightCircleFill  className='right'/></div>
              <p className='info-review'>{review}</p>
              <button className='random' onClick={handleRandom}>Random</button>
              </div>
        
          );
      })}
      </div>
    </section>
  )
}

export default Review;
