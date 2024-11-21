import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector(store=>store.appSlice);
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Inbox />} />
                <Route path="mail/:id" element={<Mail />} />
              </Route>
            </Routes>
          </Router>
          <div className="absolute w-[30%] bottom-0 right-20 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
