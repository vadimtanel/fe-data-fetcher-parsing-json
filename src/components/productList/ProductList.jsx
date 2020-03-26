import React from "react";
import { useSelector } from 'react-redux'
import Product from './../product';
import './productList.less';

export default function ProductList() {
    const products = useSelector(state => state.products)
    const isBusy = useSelector(state => state.isBusy);

    const renderProductList = () => {
        return products.map((x, index) => {
            return (
                <Product key={x.productId} data={x} />
            );
        });
    }

    const renderNoProduct = () => {
        return (
            <div>
                No products
            </div>
        );
    }

    const renderByData = () => {
        if (products.length === 0 && !isBusy) {
            return renderNoProduct();
        } else {
            return renderProductList();
        }
    }

    return (
        <div className="productContainer">
            {renderByData()}
        </div>

    );
}
