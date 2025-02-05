import { useRef, useState } from "react";
import "./App.css";
import Altcha from "./components/Altcha";

function App() {
  const altchaRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [result, setResult] = useState("");

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    return fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        captcha: altchaRef.current?.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data.message);
      });
  };

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
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
        <label>
          Response:{" "}
          <span className={result === "Captcha completed" ? "green" : "red"}>
            {result}
          </span>
        </label>
      </form>
    </>
  );
}

export default App;
