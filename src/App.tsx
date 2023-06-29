import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"; 
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
import { useState, useEffect, SetStateAction } from "react";
export type RateItem = {
    rate: number;
    count: number;
}
export interface StoreItem  {
     category: string, 
     description: string,
     id: number, 
     price: number,
     rating: RateItem,
     title: string,
     image: string,
}

function App() {
  const [data, setData] = useState([] as StoreItem[]);

  useEffect(() => {
      async function ApiCall(): Promise<SetStateAction<StoreItem[]> | undefined>{
          try {
              const response = await fetch('https://fakestoreapi.com/products'); 
              const data : StoreItem[] = await response.json(); 
              setData(data);
              return data;
              
          } catch(err) {
              console.error(err);
            
          }
      }
     
      ApiCall();
     
      
  },[])
  console.log(data);
 
  return (
    <>
    <NavBar />
   <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store {...data}  />} />
    </Routes>
   </Container>
   </>
  )
}

export default App
