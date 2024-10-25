import { useEffect, useState } from "react"
import Card from "../Card/Card"
import "./Grid.css"

import { ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function winnerCheck(board,symbol)
{

   if(board[0] === board[1] && board[1] === board[2] && board[0] === symbol) return symbol

   if(board[3] === board[4] && board[4] === board[5] && board[3] === symbol) return symbol

   if(board[6] === board[7] && board[7] ===  board[8] && board[6] === symbol) return symbol


   if(board[0] === board[3] && board[3] === board[6] && board[0] === symbol) return symbol

   if(board[1] === board[4] && board[4] === board[7] && board[1] === symbol) return symbol

   if(board[2] === board[5] && board[5] === board[8] && board[2] === symbol) return symbol


   if(board[0] === board[4] && board[4] === board[8] && board[0] === symbol) return symbol


   if(board[2] === board[4] && board[4] === board[6] && board[2] === symbol) return symbol


   return null

}


// this should render all the 9 cards
const Grid = ({numberOfCards}) => {

    const [turn,setTurn] = useState(true)    // false -> X   true -> O

    const [board,setboard] = useState(Array(numberOfCards).fill(""))

    const [winner,setWinner] = useState(null)


     
    useEffect(() => {

     let count = 0

     board.forEach((val) => {

       if(val)
        count++

     })

     if(count === 9)
      toast("It's a draw")


    },[board])


    function play(index)
    {
   
        if(board[index] !== "" || winner)
          return   
        
        const nextBoard = [...board]

        nextBoard[index] = (turn)?("O"):("X")

        const isWinner = winnerCheck(nextBoard,(turn)?("O"):("X"))

        if(isWinner)
        {
          toast(`Congratulations ${isWinner} won the game`)

           setWinner(isWinner)
        }

        setboard(nextBoard)
      
        setTurn(!turn)

    }


    function reset()
    {

      setboard(Array(numberOfCards).fill(""))

      setWinner(null)

      setTurn(true)

    }

    return (

     <div>
     <ToastContainer position="bottom-center"/>
       {winner && (
        <>
        <h1 className="turn-highlight">Winner is : {winner} </h1>
        <button className="turn-highlight" onClick={reset}>Reset Board</button>
        </>
       )
      }
      <h1 className="turn-highlight">Current Turn : {(turn)?("O"):("X")} </h1> 
      <div className="grid">
      {board.map((value,idx) => {

        return <Card key={idx} onPlay = {play} player = {value} index = {idx}/>

      })}
      </div>

     </div> 
    
    )

}

export default Grid