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
  return ( 
    <>
      <Header/>
      <button> Add a New List </button>
      <div id='list-space'>
        {board.map( (list) => 
          <List list={list}/>
        )}
      </div>
    </>
  );
}

export default Board;