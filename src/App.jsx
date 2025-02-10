import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
