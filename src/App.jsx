import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"
import corn1 from "./images/corn1.jpeg"
import corn2 from "./images/Ears-corn.webp"
import Home from "./containers/Home/Home";
import Nav from "./containers/Nav/Nav";
import ProfileLog from "./containers/ProfileLog/ProfileLog";

function App() {
const [profile, setProfile] = useState({username: ""})

const imagesArr = [corn1, corn2, corn1, corn2, corn1, corn2, corn2, corn2, corn1]






  return (
    <div className="app">
      <Router>
        {profile.username && <Nav/>}
        {!profile.username && <ProfileLog profile = {profile} setProfile = {setProfile}/>}
   

        <Routes>

          <Route 
          path = "/home" 
          element = {profile.username && <Home profile = {profile} imagesArr={imagesArr}/>}
          ></Route>
          <Route
          path = "/"
          element = {
            <div>
              <h2>Welcome to InstaJoke!</h2>
              <p>It doesn't really work???</p>
            </div>
          }></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
