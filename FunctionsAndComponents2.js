function Welcome(props){
  return <h1>Hello {props.name}</h1>;
}

function App()
{
  return (<div>
    <Welcome name="Zara"/>,
    <Welcome name="Cole" />
    <Welcome name="Sarah"/>
    </div>)  ;
}

ReactDOM.render(<App />, document.getElementById('root'));