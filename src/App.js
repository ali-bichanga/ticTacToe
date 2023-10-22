import { useState } from 'react';

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  function Square({ value, onClickSquare}){
    

    /*function handleClick(){
      let box = event.target.value;
      setValue("X");
    }*/
    return <button className="square" onClick={onClickSquare}>{value}</button>;
  }
  return (
    <>
    <div className="board-row">
      <Square value={squares[0]} onClickSquare={() => handleClick(0)}/>
      <Square value={squares[1]} onClickSquare={() => handleClick(1)}/>
      <Square value={squares[2]} onClickSquare={() => handleClick(2)}/>      
    </div>

    <div className="board-row">
    <Square value={squares[3]} onClickSquare={() => handleClick(3)}/>
      <Square value={squares[4]} onClickSquare={() => handleClick(4)}/>
      <Square value={squares[5]} onClickSquare={() => handleClick(5)}/>
    </div>

    <div className="board-row">
    <Square value={squares[6]} onClickSquare={() => handleClick(6)}/>
      <Square value={squares[7]} onClickSquare={() => handleClick(7)}/>
      <Square value={squares[8]} onClickSquare={() => handleClick(8)}/>
    </div>
    

    </>
  
  )
}
