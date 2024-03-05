import style from "./App.module.css";
import  Navbar from "./components/Navbar/Navbar";
import  AlbumsList from "./components/AlbumList/AlbumList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={style.App}>
      <ToastContainer />
      <Navbar />
      <div className={style.content}>
        <AlbumsList />
      </div>
    </div>
  );
}

export default App;