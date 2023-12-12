import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>ERROR 404 - NOT FOUND</h1>} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
