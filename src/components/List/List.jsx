import Card from "../Card/Card";

const List = ({list}) => {
  return ( 
    <div class='list'>
      <header class='list-header'>
        <h3 style={{margin:'0'}}> {list.title} </h3>
        <button class='card-add-btn'> + </button>
      </header>
      {list.cards.map(card => 
        <Card text={card}/>
      )}
    </div>
  );
}

export default List;