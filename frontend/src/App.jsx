import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    axios.get("/api/jokes").then( (response) => {
      console.log("respons",response.data);
      setCount(response.data);
    });
  },[]);
  return (
    <div>
      {count?.map((item)=>(
        <div key={item.id}>
          <h1>{item.name}</h1>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default App;
