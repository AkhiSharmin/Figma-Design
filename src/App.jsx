import "./App.css";
import Main from "./MainContent/Main";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
