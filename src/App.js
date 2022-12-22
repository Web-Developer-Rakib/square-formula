import "./App.css";
import NewFormula from "./components/NewFormula/NewFormula";
import OldFormula from "./components/OldFormula/OldFormula";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Old formula</h1>
      <OldFormula></OldFormula>
      <h1 className="heading">New formula</h1>
      <NewFormula></NewFormula>
    </div>
  );
}

export default App;
