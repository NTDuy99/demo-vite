import "./App.css";
import { Routes, Route } from "react-router-dom";
import Laptop from "../../src/Component/Laptop";
import Desktop from "../../src/Component/Desktop";
import Product from "../../src/Component/Product";
import ListProduct from "../../src/Component/ListProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/product" element={<Product />}>
        <Route index element={<Product></Product>} />
        <Route path="laptop" element={<Laptop />} />
        <Route path="desktop" element={<Desktop />} />
      </Route>
      <Route path="*" element={<h1>Not Found!</h1>}/>
    </Routes>
  );
}

export default App;
