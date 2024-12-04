// app/products/page.js (Server Component)
import Products from './Products';

async function fetchProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  return products;
}

export default async function Page() {
  const products = await fetchProducts('https://fakestoreapi.com/products');
  
  return <Products products={products} />;
}


