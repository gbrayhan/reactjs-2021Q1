import "./App.css";
import React from "react";
import StyledComponent from "./component/StyledComponent";

const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
};

const Hello = () => <h2>Hello there!</h2>;

export default function App() {
  return (
    <div className="App">
      <Hello />
      <Person
        name="Ilse Pamela"
        emai="jordan@twitter.com"
        phone="+52 5544332288"
      />
      <StyledComponent />
    </div>
  );
}
