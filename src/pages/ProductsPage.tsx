import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open: openModal, close: closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error}/>}
            {products.map(products => <Product product={products} key={products.id} />)}

            {modal && <Modal title="Create new product" onClose={closeModal}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button
                className="fixed bottom-5 right-10 rounded-full bg-red-500 text-white text-3xl text-center px-3 py-2"
                onClick={openModal}>
                +
            </button>
        </div>
    )
}