import {Link, useNavigate} from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    function navigateHandler(){
        navigate('/products');
    }
    return(
        <>
            <h1>My Home Page</h1>
            <p>
                Go to the
            <Link to="/products">List of Products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Products</button>
            </p>
        </>


    );
}
export default Home;
