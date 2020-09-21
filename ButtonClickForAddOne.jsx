class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {count:0};
  }
  
  handleClick() {
    
    this.setState({count: this.state.count + 1}, function() {console.log('finished incrementing')});
                                                               
  }
  
  render() {
    
    return (
    <div>
        <div>Clicks so far is: {this.state.count}</div>
        <button onClick={this.handleClick.bind(this)} >Add one</button>
    </div>
    );
    
    
  }
  
}

ReactDOM.render(
<App/>, document.getElementById('root')
);

