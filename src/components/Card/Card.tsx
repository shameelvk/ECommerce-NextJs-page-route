import React from 'react'
import style from './Card.module.css'
import Link from 'next/link';
import { Product } from '@/types/types';


type CardProps = {
    pdData: Product;
  };

function Card({pdData}:CardProps) {
  return (
    <div className={`card ${style.pd_card}`}>
      <img src={pdData.image.url} className={`card-img-top ${style.pd_image} p-2`} alt={""} />
      <div className="card-body">
        <h5 className={style.card_title}>{pdData.name}</h5>
        <p className={`card-text ${style.card_description}`}>{pdData.description.slice(3,-4)}</p>
        <p className="card-text">MRP:₹{pdData.price.raw}<del className="text-danger ms-2">${(pdData.price.raw * 1.2).toFixed(2)}</del></p>
        <p className={style.deliver}><strong>Free Delivery By FurniQuest</strong></p>
        <Link href={"products/"+pdData.id} className="btn btn-danger">View Product</Link>
      </div>
    </div>
  )
}

export default Card