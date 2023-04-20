import React from 'react'

const Cell = ({ value, onClick }) => {
    return (
        <div
            className={`m-2 shadow-md bg-white cursor-pointer rounded-md flex justify-center items-center h-[90px] w-[90px] md:h-[100px] md:w-[100px] `}
            onClick={onClick}
        >
            <p
                className='text-3xl text-gray-600'
            >{value}</p>
        </div>
    )
}

export default Cell
