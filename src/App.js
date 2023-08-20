import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Logout from './component/Logout';
import Nav from './component/Nav';
import UserInfo from './component/UserInfo';
import Footer from './component/Footer';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
