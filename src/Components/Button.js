import React from 'react'

function Button({buttonName, disabled}) {
    if (disabled === true) {
        return(
            <button
                type="button"
                disabled
                onClick={() => console.log(buttonName)}
            >
                {buttonName}
            </button>
        )
    } else {
        return (
            <button
                type="button"
                onClick={() => console.log(buttonName)}
            >
                {buttonName}
            </button>
        )
    }
}

export default Button