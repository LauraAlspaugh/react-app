import { Route } from "react-router-dom";
import AllMeetups from "./Components/AllMeetups.js";
import Favorite from "./Components/Favorites.js";
import NewMeetup from "./Components/NewMeetups.js";
 function App(){
  return <div>
    <Route path='/'>
      <AllMeetups/>
    </Route>
    <Route path='/favorites'>
      <Favorite/>
    </Route>
    <Route path='/new-meetup'>
      <NewMeetup/>
    </Route>
  </div>;
 }
 export default App;





