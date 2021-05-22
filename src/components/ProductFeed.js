import React from "react";
import Products from "./Products";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products &&
        products
          .slice(0, 4)
          .map(({ id, title, price, category, image, description }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              image={image}
              description={description}
            />
          ))}
      <img
        src="https://links.papareact.com/dyz"
        alt=""
        className="md:col-span-full"
      />
      <div className="md:col-span-2">
        {products &&
          products
            .slice(4, 5)
            .map(({ id, title, price, category, image, description }) => (
              <Products
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                image={image}
                description={description}
              />
            ))}
      </div>
      {products &&
        products
          .slice(5, products.length)
          .map(({ id, title, price, category, image, description }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              image={image}
              description={description}
            />
          ))}
    </div>
  );
};

export default ProductFeed;
