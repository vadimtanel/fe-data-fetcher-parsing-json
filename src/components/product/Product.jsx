import React from 'react';
import './product.less';
import { Badge } from "rsuite";

export default function Product(props) {


    return (
        <div className="product">
            <a href={props.data.detail} target="_blank" rel="noopener noreferrer">

                <div className="image">
                    <img src={props.data.image} alt={props.data.productId} title={props.data.subject} />
                </div>
                <div class="information">
                    <div className="title">
                        {props.data.subject}
                    </div>
                    <div className="price"><span>Price range: </span>{props.data.price}</div>
                    <div className="minPrice"><span>Minimum price: </span>{props.data.minPrice}</div>
                </div>
                <div className="moreInfo">
                    <div className="mobileUrl"><a href={props.data.detailWap} target="_blank" rel="noopener noreferrer"><Badge content="Visit Mobile" /></a></div>
                    <div className="moqUnit">{props.data.moqUnit}</div>
                    <div className="moq">{props.data.moq}</div>
                    <div className="trackInfo">{props.data.trackInfo}</div>
                    <div className="promotion">{props.data.promotionMoq}</div>
                </div>
            </a>
        </div>
    );
}