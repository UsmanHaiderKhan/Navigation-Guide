import {Link} from "react-router-dom";

function Products(){
    const PRODUCTS = [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'},
    ];
    return (
        <>
            <h1>My Product Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
                    ))}
            </ul>
        </>

    );
}

export default Products;
