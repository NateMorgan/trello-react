import Card from "../Card/Card";

const List = (props) => {
  return ( 
    <div class='list'>
      <header class='list-header'>
        <h3 style={{margin:'0'}}> {props.listName} </h3>
        <button style={{height:'40px',width:'40px',textAlign:'center', fontSize:'large',fontWeight:'bold'}}> + </button>
      </header>
      <Card/>
    </div>
  );
}

export default List;