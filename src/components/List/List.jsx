import Card from "../Card/Card";

const List = ({list, addCard}) => {

  const handleClick = () => {
    addCard(list.title)
    console.log("clicking")
  }

  return ( 
    <div className='list'>
      <header className='list-header'>
        <h3 style={{margin:'0'}}> {list.title} </h3>
        <button className='card-add-btn' onClick={handleClick}> + </button>
      </header>
      {list.cards.map(card => 
        <Card key={card} text={card}/>
      )}
    </div>
  );
}

export default List;