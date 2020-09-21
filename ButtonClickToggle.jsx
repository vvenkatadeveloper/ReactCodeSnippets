class TestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  render(){
    return (
      <div>
        <h1>Status is {this.state.isToggleOn? 'ON': 'OFF'}</h1>
        <button onClick={this.handleClick}>Click here to toggle</button>
      </div>
    );
    
  }
  
}

ReactDOM.render(
<TestApp/>, document.getElementById('root') );