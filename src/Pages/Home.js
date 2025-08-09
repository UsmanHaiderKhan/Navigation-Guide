import {Link} from "react-router-dom";
function Home() {
    return(
        <>
            <h1>My Home Page</h1>
            <p>
                Go to the
            <Link to="/products">List of Products</Link>
            </p>
        </>


    );
}
export default Home;
