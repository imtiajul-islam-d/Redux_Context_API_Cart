import Cart from "../../Pages/Cart/Cart";
import Filtered from "../../Pages/Filtered/Filtered";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/filtered",
                element: <Filtered></Filtered>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            }
        ])
    }
])
export default router