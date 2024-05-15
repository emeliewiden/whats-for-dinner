import "./App.css";
import DinnerSuggestion from "./component/suggestions";

function App() {
  return (
    <main>
      <div className="App">
        <header className="App-header">
          <div className="App-container">
            <h1>Vad ska vi äta ikväll?</h1>
            <DinnerSuggestion />
          </div>
        </header>
      </div>
    </main>
  );
}

export default App;