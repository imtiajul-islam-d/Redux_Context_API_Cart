import React from "react";
import Card from "../../components/Loading/Card/Card";
import Loading from "../../components/Loading/Loading";
import { useProducts } from "../../context/ProductProvider";

const Home = () => {
  const {
    products: { products, loading, error },
    dispatch,
  } = useProducts();
  let content;
  if (loading) {
    content = <Loading></Loading>;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>No data found</p>;
  }
  if (!loading && !error && products.length) {
    content = products.map((item) => <Card key={item?.id} item={item}></Card>);
  }
  return (
    <div>
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
