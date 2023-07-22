import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/YouMayAlsoLike.scss"; // Create this Sass file for styling the slider
import {products} from '../utils/services/dummyData'

const YouMayAlsoLike = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  

  return (
    <div className="you-may-also-like">
      <h2 className="like-header">You May Also Like</h2>

      <Carousel responsive={responsive}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              imgSrc={product.imgSrc}
              title={product.title}
              salary={product.salary}
              description={product.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default YouMayAlsoLike;
