import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Carousel from '@/components/Banner/Banner';
import { Category, Product } from '@/types/types';
import { ProductServices } from '@/services/productServices';
import FilterButton from '@/components/FilterButton/FilterButton';
import Card from '@/components/Card/Card';
import animationData from "@/lotties/loading.json";
import Lottie from "lottie-react";


 function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [isLoading, setisLoading] = useState(true)
 useEffect(() => {
   async function callInital(){
    
  let products = await ProductServices.getProducts();
  let category=await ProductServices.getCat()
  setProducts(products)
  setCategory(category)
  setisLoading(false)
   }
 
   callInital();
 }, [])
 

  return (
    <div>
      <Carousel/>
     
      {isLoading?<div className='row  justify-content-center items-center w-100'>
                    <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center"
                    loop={true}
                    style={{width:'20vw'}}
                />
                </div>:<div className="container py-4">
            <div className="row">
                <div className="col">
                    <h2 className="text-center mb-4">Products</h2>
                </div>
            </div>
            <div className="row mb-4 justify-content-center">
        <div className="col-12 col-md-auto mb-2">
          <Link className="btn btn-danger w-100" href="/products">ALL</Link>
        </div>
        {category.map((c: Category) => (
          <div className="col-12 col-md-auto mb-2" key={c.id}>
            <FilterButton btnName={c.name} btnId={c.id}  />
          </div>
        ))}
      </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {products.map((p: Product) => {
                    return <div className="col" key={p.id}>
                        <Card pdData={p} />
                    </div>
                })}

            </div>
        </div>}

    </div>
  )
}

export default Home