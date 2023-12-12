
import ItemListContainer from "./components/ItemListContainer";

import Layout from "./pages/Layout";

//import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Item from "./components/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer/>}/>
          {/* <Route index element={<ItemListContainer />} />
          <Route path="/productos/*" element={<ItemListContainer />} />
          <Route path="/productos/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>ERROR 404 - NOT FOUND</h1>} />
          <Route path="/categoria/:productoCat" element={<ItemListContainer />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
