import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
