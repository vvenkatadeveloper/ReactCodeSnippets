function Doubles(props)
{
  const numbers = props.Array;
  const doubles = numbers.map((number)=><li>{number*2}</li>);
  
return (
  <div>
    <ul>
      {doubles}
    </ul>
  </div>
  );
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

ReactDOM.render(<Doubles Array={numbers} />, document.getElementById('root'));
