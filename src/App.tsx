import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Message from "./Message";
function App(){
  
  
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  const [alertVisible, setAlertVisibility] = useState(false);
  return <div>
    { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
      Hey there!
    </Alert>}
    <Button color= "secondary" onClick={()=> setAlertVisibility(true)}>
    Hello World!
  </Button>
  
  </div>

}
export default App;