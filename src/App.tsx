import {Product} from './components/Product'
import {useProducts} from "./hooks/products";
import {Loader} from "./components/loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/modal";
import {CreateProduct} from "./components/CreateProduct";


function App() {

    const {loading, error, products} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error}/>}
            {products.map(products => <Product product={products} key={products.id} />)}

            <Modal title="Create new product">
                <CreateProduct />
            </Modal>
        </div>
    )
}

export default App;
