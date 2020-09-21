function ListItem(props){
  return (<li>{props.value}</li>);
}

function NumberList(props)
{
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
            <ListItem key={number.toString()} value={number} /> );
                    
    return(
        <div>
            <ul>
            {listItems}
            </ul>
        </div>
    );
}

const numbers = [1,2,3,4,5,6,7];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));