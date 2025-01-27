import { useRef, useState } from "react";
import "./App.css";
import Altcha from "./components/Altcha";

function App() {
  const altchaRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form>
        <h1>Example Altcha Form</h1>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          type="email"
        />
        <label>Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number..."
        />
        <br />
        <Altcha ref={altchaRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
