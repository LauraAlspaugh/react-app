function ListGroup(){
    const items = [
        'Cambridge',
        'Brooklyn',
        'Paris',
        'Tokyo',
        'Manhattan',
        'Denver'
    ]
    return (
        <>
    <h1>List</h1>
    <ul className="list-group">
       { items.map (item => <li className="list-group-item" key={item} onClick={()=> console.log(item)} >{item}</li>)}
    
  </ul>
  </>
    )
}
export default ListGroup;