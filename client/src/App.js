import { useEffect, useState } from "react";
import "./styles/index.css";
import axios from "./axios-conf";
function App() {
  const [webName, setWebName] = useState("Loading...");
  const [mail, setMail] = useState("Loading...");
  const [address, setAddress] = useState("Loading...");
  useEffect(async () => {
    const response = await axios.get("/");
    if (response.data) {
      const { address, mail, website } = response.data;
      setWebName(website);
      setMail(mail);
      setAddress(address);
    }
  }, []);

  return (
    <div id="app">
      <header>
        <h1>{webName}</h1>
      </header>
      <footer>
        <ul>
          <li>email:{mail}</li>
          <li>address:{address}</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
