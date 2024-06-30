import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ProductServices } from '@/services/productServices';
import { Product } from '@/types/types';
import { useCartCount } from '@/contexts/CartCountContext';
import Lottie from 'lottie-react';
import animationData from "@/lotties/loading.json";

function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setisLoading] = useState(true)
  const route = useRouter();
  const productId = route.query.productId;
  
  const {updateCartCount}=useCartCount();

  useEffect(() => {
    const initialSetup = async () => {
      if (typeof productId === 'string') {
        const fetchedProduct = await ProductServices.getProductById(productId);
        setProduct(fetchedProduct);
        setisLoading(false)
      }
    };
    initialSetup();
  }, [productId]);

  const handleAddToCart = async () => {
    
    
    let data = await ProductServices.addToCart(productId)
    if (data) {
      updateCartCount(data.total_unique_items)
      
    }
  };

  return (
    <div className="container">
      {
        isLoading?<div className='row  justify-content-center items-center w-100' >
        <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
        style={{width:'20vw'}}
    />
    </div>:<div className="row align-items-center justify-content-center p-2 my-2">
        <div className="col-md-6 d-flex">
          {product?.image && (
            <img
              src={product.image.url}
              className="img-fluid pd-img m-auto"
              alt="Product"
              style={{ width: "70%" }}
            />
          )}
        </div>
        <div className="col-md-6">
          <h2>{product?.name}</h2>
          {product?.description && <p>{product.description.slice(3, -4)}</p>}
          <p>Price: ₹{product?.price?.raw}</p>
          <button className="btn btn-danger" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      }
    </div>
  );
}

export default ProductDetails;
