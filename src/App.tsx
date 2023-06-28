import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"; 
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
import { useState, useEffect, SetStateAction } from "react";
type RateItem = {
    rate: number;
    count: number;
}
interface StoreItem  {
     category: string, 
     description: string,
     id: number, 
     price: number,
     rating: RateItem,
     title: string,
}
function App() {
  const [data, setData] = useState([] as StoreItem[]);

  useEffect(() => {
      async function ApiCall(): Promise<SetStateAction<StoreItem[]> | undefined>{
          try {
              const response = await fetch('https://fakestoreapi.com/products'); 
              const data = await response.json(); 
              console.log(data);
              setData(data);
              return data;
          } catch(err) {
              console.error(err);
            
          }
      }
      ApiCall();
      
  },[])

  return (
    <>
    <NavBar />
   <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
   </Container>
   </>
  )
}

export default App
