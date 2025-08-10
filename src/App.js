import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetails from "./Pages/Product-Details";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            // {index:true, element: <Home/>}, if parent route is activated
            {path: '/', element: <Home/>},
            {path: '/products', element: <Products/>},
            {path: '/products/:productId', element: <ProductDetails/>},
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
