import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
//Add components
import Nav from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPageComponent";
import Home from "./Components/Home/HomeComponent";
import CountryDetails from "./Components/Details/CountryDetailsComponent";
import SearchName from "./Components/SearchName/SearchNameComponent";
import Form from "./Components/Form/FormComponent";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/countries/:id" element={<CountryDetails />} />
        <Route exact path="/search/:name" element={<SearchName />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
