import React, { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";
import { Pagination } from "../pages";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Zline Blazer", "price": 149, "image": "/assets/images/car1.png"},
    {"id": 2, "name": "Glade Rockerz 450", "price": 49, "image": "/assets/images/jeep7.png"},
    {"id": 3, "name": "Mars Rider", "price": 179, "image": "/assets/images/car9.png"},
    {"id": 4, "name": "Electric Climber", "price": 39, "image": "/assets/images/jeep2.png"},
    {"id": 5, "name": "X5 Vue", "price": 185.99, "image": "/assets/images/car3.png"},
    {"id": 6, "name": "Red Thunder", "price": 290, "image": "/assets/images/jeep3.png"},
    {"id": 7, "name": "Zline Blazer", "price": 149, "image": "/assets/images/car4.png"},
    {"id": 8, "name": "Glade Rockerz 450", "price": 49, "image": "/assets/images/jeep4.png"},
    {"id": 9, "name": "Carolinal Z", "price": 219, "image": "/assets/images/car5.png"},
    {"id": 10, "name": "Rude Mark", "price": 99.99, "image": "/assets/images/jeep5.png"},
    {"id": 11, "name": "Slate Five", "price": 145.99, "image": "/assets/images/car6.png"},
    {"id": 12, "name": "Zoom Buz", "price": 124, "image": "/assets/images/jeep1.png"},
    {"id": 13, "name": "Zline Blazer", "price": 149, "image": "/assets/images/jeep7.png"},
    {"id": 14, "name": "Finger Loop", "price": 84, "image": "/assets/images/jeep8.png"},
    {"id": 15, "name": "Rider Bay", "price": 149.99, "image": "/assets/images/jeep9.png"},
    {"id": 16, "name": "Zline Blazer", "price": 149, "image": "/assets/images/car2.png"},
    {"id": 17, "name": "Glade Rockerz 450", "price": 49, "image": "/assets/images/car10.png"},
    {"id": 18, "name": "Mars Rider", "price": 179, "image": "/assets/images/car3.png"},
  ]
  const productsPerPage = 6; // Number of products per page
  const totalPages = Math.ceil(products.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <main>
     <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>Latest Collection</h1>
      <section className="products">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </main>
  );
};

export default Home;