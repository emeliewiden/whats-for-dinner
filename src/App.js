import "./App.css";
import BreakfastSuggestion from "./component/suggestions";

function App() {
  return (
    <main>
      <div className="App">
        <header className="App-header">
          <div className="App-container">
            <h1>Whats for dinner?</h1>
            <BreakfastSuggestion />
          </div>
        </header>
      </div>
    </main>
  );
}

export default App;