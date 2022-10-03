import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"
import corn1 from "./images/corn1.jpeg"
import corn2 from "./images/Ears-corn.webp"
import coff1 from "./images/crua.jpeg"
import coff2 from "./images/cff.jpeg"
import coff3 from "./images/cdd2.jpeg"
import Home from "./containers/Home/Home";
import Nav from "./containers/Nav/Nav";
import ProfileLog from "./containers/ProfileLog/ProfileLog";

function App() {
const [profile, setProfile] = useState({username: ""})

const imagesArr = [corn1, corn2, corn1, corn2, corn1, corn2, corn2, corn2, corn1]

const coffeeArr = [coff1,coff2,coff3, coff1,coff2,coff3]
const coffeeProfile = {username: "CoffeeLoverXTREME"}






  return (
    <div className="app">
      <Router>
        {profile.username && <Nav profile = {profile}/>}
        {!profile.username && <ProfileLog profile = {profile} setProfile = {setProfile}/>}
   

        <Routes>

          <Route 
          path = {`/home/${profile.username}`} 
          element = {profile.username && <Home profile = {profile} imagesArr={imagesArr}/>}
          ></Route>
          <Route
          path = "/"
          element = {
            <div>
              <h2>Welcome to InstaJoke!</h2>
              <p>It doesn't really work???
                Enter your username as Coffee for a new experience!
              </p>
            </div>

          }></Route>
          <Route
          path= "/coffeeguy"
          element = {<Home profile = {coffeeProfile} imagesArr = {coffeeArr} />}
          ></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
