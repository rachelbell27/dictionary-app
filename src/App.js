import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container m-3">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a href="https://github.com/rachelbell27/dictionary-app">
            Coded by Rachel Bell
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
