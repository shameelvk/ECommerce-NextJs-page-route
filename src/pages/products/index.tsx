import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProductServices } from '@/services/productServices';
import { Category, Product } from '@/types/types';
import FilterButton from '@/components/FilterButton/FilterButton';
import Card from '@/components/Card/Card';
import { useRouter } from 'next/router';
import animationData from "@/lotties/loading.json";
import Lottie from "lottie-react";

function Products() {
  const route = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    async function callInitial() {
      let products = await ProductServices.getProducts();
      let category = await ProductServices.getCat();
      setProducts(products);
      setCategory(category);
      setisLoading(false)
    }

    callInitial();
  }, []);

  let filteredProducts = products;
  const catQuery = route.query.cat;
  const productQuery = route.query.product;

  if (catQuery && typeof catQuery === 'string') {
    filteredProducts = products.filter((p: Product) => p.categories[0].id === catQuery);
  } else if (productQuery && typeof productQuery === 'string') {
    filteredProducts = products.filter((p: Product) =>
      p.name.toLowerCase().includes(productQuery.toLowerCase())
    );
  }

  return (
    <div className="container py-4">
      {isLoading?<div className='row  justify-content-center items-center w-100'>
                    <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center"
                    loop={true}
                    style={{width:'20vw'}}
                />
                </div>:<div>
      <div className="row mb-4">
        <div className="col">
          <h2 className="text-center">Products</h2>
        </div>
      </div>
      <div className="row mb-4 justify-content-center">
        <div className="col-12 col-md-auto mb-2">
          <Link className="btn btn-danger w-100" href="/products">ALL</Link>
        </div>
        {category.map((c: Category) => (
          <div className="col-12 col-md-auto mb-2" key={c.id}>
            <FilterButton btnName={c.name} btnId={c.id} />
          </div>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredProducts.map((p: Product) => (
          <div className="col" key={p.id}>
            <Card pdData={p} />
          </div>
        ))}
      </div>
      </div>}
    </div>
  );
}

export default Products;
