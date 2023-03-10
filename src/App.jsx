import { AppRouter } from "./Components/App/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Partials/Navbar/Navbar";
import { Main } from "./Components/Partials/Main/Main";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Main>
          <AppRouter />
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
