import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./Components/AllMeetups.js";
import Favorite from "./Components/Favorites.js";
import NewMeetup from "./Components/NewMeetups.js";
 function App(){
  return <div>
    <Routes>
    <Route path='/'>
      <AllMeetups/>
    </Route>
    </Routes>
<Routes>
    <Route path='/favorites'>
      <Favorite/>
    </Route>
    </Routes>
    <Routes>
    <Route path='/new-meetup'>
      <NewMeetup/>
    </Route>
    </Routes>
  </div>;
 }
 export default App;





