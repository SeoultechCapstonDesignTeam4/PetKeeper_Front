import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Logout from './component/Logout';
import Nav from './component/index/Nav';
import UserInfo from './component/UserInfo';
import UserInfoSelf from './component/UserInfoSelf';
import Footer from './component/index/Footer';
import UserList from './component/UserList';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/userInfo" element={<UserInfoSelf />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
