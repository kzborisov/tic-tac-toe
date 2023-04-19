import { useState } from 'react'
import './App.css'
import Cell from './components/Cell';

function App() {
    const board = new Array(9).fill(0);
    return (
        <div className="m-6 p-4 drop-shadow-2xl shadow-2xl border grid grid-cols-3 gap-4 rounded-xl w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
            {board.map((_, idx) => (
                <Cell key={idx} />
            ))}
        </div>
    )
}

export default App
