import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Header />
      <Blog />
      <Question />
    </div>
  );
}

export default App;
