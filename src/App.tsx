import { Route, Routes, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"; 
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
import { useState, useEffect, SetStateAction } from "react";
import ProductPage from "./pages/ProductPage";
// create type for rating object
export type RateItem = {
    rate: number;
    count: number;
}
// create type for API call data
export interface StoreItem  {
     category: string, 
     description: string,
     id: number, 
     price: number,
     rating: RateItem,
     title: string,
     image: string,
}

function ContainerColor(): string {
   const path = useLocation().pathname; 
   const location = path.split('/')[1];
   if(location === '') return 'black';
   else return 'white';
}
// create main app function with routes for different pages
function App() {
  // set data as array of store items 
  const [data, setData] = useState([] as StoreItem[]);

  // fetch FakeStoreAPI data on page app load and update state
  useEffect(() => {
      async function ApiCall(): Promise<SetStateAction<StoreItem[]> | undefined>{
          try {
              // fetch data using async/await
              const response = await fetch('https://fakestoreapi.com/products'); 
              const data : StoreItem[] = await response.json(); 
              setData(data);
              return data;
              
          } catch(err) {
             //handle error if data failed to fetch
              console.error(err);
            
          }
      }
      // call async data fetching function
      ApiCall();
     
      
  },[])
  console.log(data);
  // return navbar and app routes 
  return (
    <>
    <NavBar />
   <Container fluid className={`bg-${ContainerColor()}`}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store {...data}  />} />
      {data.map((item) => {
         const name: string = item.title.replace(/[^A-Za-z0-9]/g, ' ');
         return (<Route key={item.id} path={`/store/${name.replace(/\s+/g, '-').trim()}`} element={<ProductPage key={item.id} />}/>)
      })}
    </Routes>
   </Container>
   </>
  )
}

export default App
