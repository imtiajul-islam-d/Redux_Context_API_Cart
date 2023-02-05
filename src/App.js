import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import router from "./routes/routes/routes";

function App() {
  return (
    <section>
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </section>
  );
}

export default App;
