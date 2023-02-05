import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Nav from "../Nav/Nav";

const Main = () => {
    return (
        <>
            <Nav></Nav>
            <section className="min-h-[80vh]">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Main;