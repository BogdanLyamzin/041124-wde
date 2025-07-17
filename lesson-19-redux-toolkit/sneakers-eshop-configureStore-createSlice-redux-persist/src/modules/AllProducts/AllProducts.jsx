import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductList from "../../shared/components/ProductList/ProductList";
import Loader from "../../shared/components/Loader/Loader";
import RequestError from "../../shared/components/RequestError/RequestError";

import { getAllProductsApi } from "../../shared/api/products-api";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProductsApi();
        setProducts(data);
      } catch (error) {
        const message = error?.response?.data?.message || error?.message;
        console.log(message);
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <SectionTitle>Товары</SectionTitle>
      <Loader loading={loading} />
      <RequestError message={error} />
      {Boolean(products.length) && <ProductList items={products} />}
    </Container>
  );
};

export default AllProducts;
