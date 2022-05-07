import React from 'react'

function Product({labelText, image, productName, productPrice}){
    return (
        <article>
            <span>{labelText}</span>
            <img src={image} alt=""/>
            <p>{productName}</p>
            <h4>€{productPrice}</h4>
        </article>
    )
}

export default Product