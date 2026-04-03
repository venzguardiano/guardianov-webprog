import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-Header">
        <h1>Welcome to My React App!</h1>
        <p>
          Name: Venz Ygnaz O. Guardiano <br />
          Email: 09163757471a@gmail.com <br />
          Other Personal Information: 6'0" tall, loves coding and coffee, enjoys
          hiking and traveling. <br />
          <a href="https://github.com/venzguardiano/guardiano-webprog.git">
            GitHub Repository
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;