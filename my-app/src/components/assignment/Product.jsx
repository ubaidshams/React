import React, { useMemo, useState } from "react";
import JSON from "./prod.json";
import "./product.css";
import Pagination from "./Pagination";
import Navbar from "../Navbar";

let PageSize = 10;
const Product = () => {
  //   let [products, setProducts] = useState(JSON);
  let [currentPage, setCurrentPage] = useState(1);
  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return JSON.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <>
      <Navbar />
      <section id="mainBlock">
        <article>
          {currentProductData.map((product, index) => {
            let {
              id,
              title,
              description,
              price,
              discountPercentage,
              rating,
              stock,
              brand,
              category,
              thumbnail,
            } = product;
            return (
              <div className="prod-card" key={index}>
                <div className="prod-img">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="rating">
                  <p>{rating}⭐</p>
                  {rating > 4.5 ? <p>Bestseller</p> : <></>}
                </div>
                <div className="prod-brand">
                  <p>{brand}</p>
                  <button className="buyBtn">Buy Now </button>
                </div>
                <div className="prod-title">
                  <p>{title}</p>
                </div>
                <div className="prod-price">
                  <strong>Rs.{price}</strong>
                  <p>({discountPercentage}% OFF)</p>
                </div>
              </div>
            );
          })}
        </article>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={JSON.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </section>
    </>
  );
};

export default Product;
