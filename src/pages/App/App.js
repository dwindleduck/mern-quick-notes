import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage"
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import './App.css';
import { getUser } from "../../utilities/users-service"


export default function App() {
  const [user, setUser] = useState(getUser())
  //const [user, setUser] = useState(null)


  return (
    <main className="App">
     
     
      {/* terinary for conditional rendering */}
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element="" />
            <Route path="/orders/new" element={<NewOrderPage />}/>
            <Route path="/orders" element={<OrderHistoryPage />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }

    </main>
  );
}
