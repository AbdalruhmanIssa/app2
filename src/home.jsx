import React, { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    setProducts(data.recipes);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='text-white mt-5 text-center py-3'>
      <div className='container'>
        <div className='row'>
          {products.map(product => (
            <div className='col-lg-4' key={product.recipe_id}>
              <div className='card'>
                <div className='card-body'>
                  <h2>{product.title}</h2>
                  <img
                    src={product.image_url}
                    className='card-img-top'
                    alt={product.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
