import LoginPage from "./Components/LoginPage";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";
import Cart from "./Components/Cart";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/nav" element={<Nav />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        </BrowserRouter>
    </>
    </div>
  );
}

export default App;
