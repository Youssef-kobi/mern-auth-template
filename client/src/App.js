import "./App.css";
import Register from "./Components/Register/RegisterForm/Register";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      <BrowserRouter>
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/Testimonial" exact> */}
            {/* <Testimonial /> */}
            {/* </Route> */}
          </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
