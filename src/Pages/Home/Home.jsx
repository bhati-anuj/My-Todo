import React from "react";
import Todo from "../../Component/Todo";
import TodoNav from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const Home = () => {
  return (
    <>
      <TodoNav />
      <a href="/signup">Log out</a>
      <div
        style={{
          // backgroundColor: "#DAFFFB",
          backgroundColor: "#64CCC5",
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          fontFamily: "Courgette, cursive",
          color: "#001C30",
        }}
      >
        <Todo />
      </div>
      <Footer />
    </>
  );
};

export default Home;
