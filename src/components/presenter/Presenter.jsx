import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setProducts, setBusyStatus } from '../../reducers/myActions';
import ProductList from './../productList';
import { Toggle } from "rsuite";
import './presenter.less';

export default function Presenter() {
    const [isListDisplay, setIsListDisplay] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBusinesses = () => {
            dispatch(setProducts([]));
            dispatch(setBusyStatus(true));
            getData("https://localhost:44380/api/products");
        };
        fetchBusinesses();
        return () => {
            dispatch(setProducts([]));
        };
    }, []);

    const getData = async (path) => {
        fetch(path, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                if (!response.ok) {
                    dispatch(setBusyStatus(false));
                    throw new Error('Network response was not ok');
                }
                console.log(response);
                return response.json();
            })
            .then((jsonData) => {
                dispatch(setProducts(jsonData));
                dispatch(setBusyStatus(false));
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
                dispatch(setBusyStatus(false));
            });
    }

    return (
        <div className={isListDisplay ? "listDisplay" : "imageGalleryDisplay"}>
            <div className="displayType">
                <Toggle size="lg" unCheckedChildren="Image gallery" checkedChildren="List display" checked={isListDisplay} onChange={() => setIsListDisplay(!isListDisplay)} />
            </div>
            <ProductList />
        </div>
    );
}