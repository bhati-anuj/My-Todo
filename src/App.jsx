import "./App.css";
import TodoNav from "./Component/Navbar";
import Todo from "./Component/Todo";

function App() {
  return (
    <>
      <TodoNav />
      <div
        style={{
          backgroundColor: "#DAFFFB",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          fontFamily: 'Courgette, cursive',
        }}
      >
        <Todo />
      </div>
    </>
  );
}

export default App;
