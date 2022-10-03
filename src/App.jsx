import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"
import ProfileLog from "./containers/ProfileLog/ProfileLog";

function App() {
const [profile, setProfile] = useState({username: ""})








  return (
    <div>
      <Router>
        {!profile.username && <ProfileLog />}

        <Routes>

          <Route 
          path = "/home" 
          element = {<h1>Bruh</h1>}
          ></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
