import { useState } from "react";

//interface Props {
// message: string;
//function App({ message }: Props) {
// return <div> {message}</div>;
//}

//creiamo un bottone che al click aument ail valore di 1
/*function App() {
  const [state, setState] = useState(0);

  function onClick() {
    setState(state + 1);
  }

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px",
      }}
    >
      {" "}
      {state}
    </button>
  );
}*/

//funzione per creare due bottoni che aumentano e diminuiscono un numero
/*function App() {
  const [state, setState] = useState(0);

  function onClickDec() {
    setState(state - 1);
  }
  function onClickInc() {
    setState(state + 1);
  }

  return (
    <div>
      <button
        onClick={onClickDec}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "30px",
        }}
        //per disabilitare il bottone una volta che si arriva a 0
        //disabled={state === 0}
      >
        Decrementa
      </button>
      <p style={{ color: state < 0 ? "red" : "black" }}> {state}</p>

      <button
        onClick={onClickInc}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "30px",
        }}
      >
        Aumenta
      </button>
    </div>
  );
}
*/

function App() {
  const [state, setState] = useState<string | number>("Cliccami");

  function onClick() {
    setState(Math.random());
  }
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "30px",
      }}
    >
      {state}
    </button>
  );
}

export default App;
