import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"; 
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
function App() {
  

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
