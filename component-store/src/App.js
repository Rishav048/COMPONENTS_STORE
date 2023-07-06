import AnalogButton from "./Components/AnalogButton";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">This Is Component Store </h1>
      </div>
      <section id='components_container'>
    <h2 className="name" >Analog Button</h2>
  <AnalogButton />

      </section>
    </>
  );
}

export default App;
