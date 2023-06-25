import React, { Fragment, useEffect, useState } from "react";
import { fetchProduct } from "../../services/product";

interface IProduct {
  id: number;
  prod_name: string;
  quantity: string;
  price: string;
  remark: string;
  description: string;
  userName: string;
}

const GetProducts = () => {
  const [allProduct, setAllProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProduct();

      setAllProduct(data);
    })();
  }, []);

  return (
    <div className="product-list-container">
      <div className="flexBox product-list">
        {allProduct.map((product) => (
          <div key={product.id} className="product-container column-flexBox ">
            <div className="top-wrapper ">
              <span className="p-name">{product.prod_name}: </span>
              <span className="p-remark">{product.remark}</span>
            </div>

            <div className="p-user">{product.userName}</div>
            <div>{product.description}</div>
            <div className="flexBox wrapper">
              <div>Price: {product.price}</div>
              <div className="p-qty">Quantity: {product.quantity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProducts;
