import React from 'react'



function Tile({tileImage, tileHeader, extraParagraph}){

    const placeholder = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque deleniti fugiat hic id, necessitatibus nostrum vel. Aliquid blanditiis cum dicta dolore illo ipsam magni necessitatibus praesentium quos ut? Velit."

    if (tileImage !== undefined){
        return(
            <section>
                <img src={tileImage} alt=""/>
            </section>
        )
    } else if (extraParagraph === true){
        return(
            <section>
                <h2>{tileHeader}</h2>
                <p>{placeholder}</p>
                <p>{placeholder}</p>
            </section>
            )
        } else {
        return(
            <section>
                <h2>{tileHeader}</h2>
                <p>{placeholder}</p>
            </section>
        )
    }
}

export default Tile
