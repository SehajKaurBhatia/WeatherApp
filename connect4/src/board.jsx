import React, { useState } from 'react';
import './board.css';

function Board() {
    const [currentPlayer, setCurrentPlayer] = useState('red');

    const Token = (col) => {
        const slots = document.getElementsByClassName('slot');
        for (let i = slots.length - 1; i >= 0; i--) {
            const slot = slots[i];
            const row = parseInt(slot.getAttribute('data-row'));
            const column = parseInt(slot.getAttribute('data-column'));
            if (column === col && slot.classList.contains('empty')) {
                slot.classList.remove('empty');
                slot.classList.add(currentPlayer);
                if (checkForWin(row, col)) {
                    document.getElementById('win').innerText=`${currentPlayer} wins!`;
                   
                    resetBoard();
                } else {
                    setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
                }
                return;
            }
        }
    };

    const checkForWin = (row, col) => {
        if (
            checkDirection(row, col, 0, 1) || // Check horizontally
            checkDirection(row, col, 1, 0) || // Check vertically
            checkDirection(row, col, 1, 1) || // Check diagonally (top-left to bottom-right)
            checkDirection(row, col, 1, -1) // Check diagonally (top-right to bottom-left)
        ) {
            return true;
        }
        return false;
    };

    const checkDirection = (row, col, delRow, delCol) => {
        const token = currentPlayer === 'red' ? 'red' : 'yellow';
        let count = 1; // Count of consecutive tokens
        let i = row + delRow;
        let j = col + delCol;
        // Check in one direction
        while (i >= 0 && i < 6 && j >= 0 && j < 7 && document.querySelector(`.slot[data-row="${i}"][data-column="${j}"]`).classList.contains(token)) {
            count++;
            i += delRow;
            j += delCol;
        }
        // Check in the opposite direction
        i = row - delRow;
        j = col - delCol;
        while (i >= 0 && i < 6 && j >= 0 && j < 7 && document.querySelector(`.slot[data-row="${i}"][data-column="${j}"]`).classList.contains(token)) {
            count++;
            i -= delRow;
            j -= delCol;
        }
        return count >= 4;
    };

    const resetBoard = () => {
        const slots = document.getElementsByClassName('slot');
        for (let i = 0; i <slots.length; i++) {
            slots[i].classList.remove('red', 'yellow');
            slots[i].classList.add('empty');
        }
    };

    const renderSlots = () => {
        const slots = [];
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                slots.push(
                    <div
                        key={`${row}-${col}`}
                        className="slot empty"
                        data-row={row}
                        data-column={col}
                        onClick={() => Token(col)}
                    ></div>
                );
            }
        }
        return slots;
    };

    return (
        <>
            <h2>Connect Four</h2>
            <p id="win"></p>
            <div className="board">{renderSlots()}</div>
        </>
    );
}

export default Board;
