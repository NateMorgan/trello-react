import React, { useState } from "react";

import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const Board = (props) => {

  const [board, setBoard] = useState([
    {
      title:'List 1a',
      cards:['This is some sample text for the cards','This is a different sentence']
    },
    {
      title:'List 2b',
      cards:[]
    },
    {
      title:'List 3b',
      cards:['one','two','three','four','five']
    }
  ])

  const addList = (titleText) => {
    setBoard([...board,{title: titleText, cards:[]}])
  }

  const addCard = (titleText) => {
    const newBoard = []
    for (let i = 0; i < board.length; i++){
      if (board[i].title === titleText){
        let newCards = [...board[i].cards,'Add Text Here']
        newBoard.push({...board[i], cards:[...newCards]})
      } else {
        newBoard.push({...board[i]})
      }
    }
    setBoard([...newBoard])
  }

  return ( 
    <>
      <Header/>
      <button id='add-new-list' onClick={() => addList('New List')}> Add a New List </button>
      <div id='list-space'>
        {board.map( (list) => 
          <List key={list.title} list={list} addCard={addCard}/>
        )}
      </div>
    </>
  );
}

export default Board;