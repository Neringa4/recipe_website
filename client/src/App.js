import "./App.css"
import Header from "./containers/Header";
import MainPage from "./containers/MainPage";
import RecipePage from "./containers/RecipePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/recipes/:label" element={<RecipePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
