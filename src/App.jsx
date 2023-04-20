import { useState } from 'react';
import './App.css'
import Cell from './components/Cell';

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true);

    const checkWinner = (board) => {
        const patterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < patterns.length; i++) {
            const [a, b, c] = patterns[i];

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    }

    const winner = checkWinner(board);

    const handleClick = (idx) => {
        if (checkWinner(board) || board[idx]) {
            return;
        }
        board[idx] = isX ? 'X' : 'O';
        setBoard(board);
        setIsX(!isX);
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsX(true);
    }

    return (

        <div className='flex flex-col h-screen max-h-screen items-center justify-center'>
            {winner &&
                <div className="mt-10 flex flex-col justify-center items-center">
                    <p className='text-2xl text-gray-600'>Winner Is: {winner}</p>
                </div>
            }
            <div className="m-6 p-4 bg-slate-100 drop-shadow-2xl shadow-2xl border flex flex-col justify-center">
                <div className='flex'>
                    <Cell value={board[0]} onClick={() => handleClick(0)} />
                    <Cell value={board[1]} onClick={() => handleClick(1)} />
                    <Cell value={board[2]} onClick={() => handleClick(2)} />
                </div>
                <div className='flex'>
                    <Cell value={board[3]} onClick={() => handleClick(3)} />
                    <Cell value={board[4]} onClick={() => handleClick(4)} />
                    <Cell value={board[5]} onClick={() => handleClick(5)} />
                </div>
                <div className='flex'>
                    <Cell value={board[6]} onClick={() => handleClick(6)} />
                    <Cell value={board[7]} onClick={() => handleClick(7)} />
                    <Cell value={board[8]} onClick={() => handleClick(8)} />
                </div>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
                <p className='text-2xl text-gray-600'>Next Player: {isX ? "X" : "O"}</p>
                <button
                    className='bg-purple-200 p-4 rounded-3xl m-4 text-xl text-gray-600'
                    onClick={handleReset}>Reset Board</button>
            </div>
        </div>

        // <div className="m-6 p-4 bg-slate-100 drop-shadow-2xl shadow-2xl border grid grid-cols-3 gap-2 rounded-xl w-[350px] md:w-[500px] h-[350px] md:h-[500px]">
        //     {board.map((_, idx) => (
        //         <Cell key={idx} value={board[idx]} onClick={() => handleClick(idx)} />
        //     ))}
        // </div>
    )
}

export default App
