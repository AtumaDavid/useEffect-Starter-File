import "./App.css";
import { useFetch } from "../hooks/useFetch";

function App() {
  const {
    data: whatever,
    isPending,
    error,
  } = useFetch("http://localhost:3000/whatever");
  //data: "whatever"
  //useFetch("http://localhost:3000/whatever(from json file)")

  return (
    <div className="App">
      <h2>header</h2>
      {/* loading screen */}
      {isPending && <div>loading...</div>}
      {/* detecting error */}
      {error && <div>{error}</div>}

      {/* displaying jsonfile in browser */}
      {/* pass "whatever" as somethingelse into the map function */}
      {whatever &&
        whatever.map(() => (
          <div>
            <h1>content</h1>
            <p>content</p>
          </div>
        ))}
    </div>
  );
}

export default App;
