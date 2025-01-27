import { useState } from "react";
import "./App.css";

function App() {
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
