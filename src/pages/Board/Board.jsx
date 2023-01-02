import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const Board = (props) => {
  return ( 
    <>
      <Header/>
      <button> Add a New List </button>
      <div id='list-space'>
        <List listName='List 1'/>
        <List listName='List 2'/>
        <List listName='List 3'/>
      </div>
    </>
  );
}

export default Board;