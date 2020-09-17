function Welcome(props)
{
    return <h1>Name is {props.name}</h1>;
}

const element = <Welcome name="Zara" />

ReactDOM.render(element, document.getElementById('root'));