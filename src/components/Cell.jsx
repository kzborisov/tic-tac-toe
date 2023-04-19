import React, { useState } from 'react'

const Cell = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log("clicked");
        setClicked(c => !c);
    }
    return (
        <div
            className={`${clicked ? "bg-blue-200" : "bg-red-200"} cursor-pointer rounded-md flex justify-center items-center`}
            onClick={handleClick}
        >
            <p className='text-3xl text-gray-600 uppercase'>{clicked ? "X" : "O"}</p>
        </div>
    )
}

export default Cell