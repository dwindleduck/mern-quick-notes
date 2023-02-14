import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage"
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import './App.css';
import { getUser, getMyNotes } from "../../utilities/users-service"
import MyNotes from "../MyNotes/MyNotes";




  // async function getNotesFromDB() {
  //   try {
  //     const notesFromDB = await getMyNotes()
  //     console.log("notesFromDB: " + notesFromDB)
  //     return notesFromDB
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }



export default function App() {
  const [user, setUser] = useState(getUser())


  //initialNotesList = getNotesFromDB()
  // console.log("Initial getting from DB: " + initialNotesList)
  //setMyNotes([notesFromDB])

  //let initialNotesList = []
  //getMyNotes from database
  //const notesFromDB =  getMyNotes()
  //notesFromDB.json()
    //.then(res => res.json())
  // getMyNotes()
  //   .then((notes) => {
  //       console.log("Notes: " + notes)
  //       initialNotesList = notes
  //       //////////Have the correct array of notes, promise chain issue.......
  //       console.log(initialNotesList)
  //  })
  //   .catch(error => {
  //     //initialNotesList = []
  //     console.error(error)
  //   })
  

    //////////This is executing before the promise resolves......
  //console.log("Initial before useState: " + initialNotesList)
  const [myNotes, setMyNotes] = useState([])

  console.log("MyNotes: " +myNotes)

  return (
    <main className="App">
      {/* terinary for conditional rendering */}
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<MyNotes user={user} myNotes={myNotes} setMyNotes={setMyNotes} />} />
            {/* <Route path="/orders/new" element={<NewOrderPage />}/>
            <Route path="/orders" element={<OrderHistoryPage />}/> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} setMyNotes={setMyNotes}/>
      }

    </main>
  );
}
