
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  
  handleLoginClick()
  {
    this.setState({isLoggedIn: true});
    
  }
  
  handleLogoutClick()
  {
    this.setState({isLoggedIn: false});
    
  }
  
  render()
  {
    var button;
    const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
          button = <button onClick={this.handleLogoutClick}>Logout</button>;
        }
        else {
          button = <button onClick={this.handleLoginClick}>Login</button>; 
        }
    return (
      <div>
        <h1>
          Greeting {isLoggedIn? 'Logged ON':'Logged OFF'}
        </h1>
          {button}
      </div>
    );
       
  }
  
}

ReactDOM.render(
<LoginControl />, document.getElementById('root')
);