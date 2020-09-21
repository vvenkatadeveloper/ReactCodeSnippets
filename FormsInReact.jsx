class NameForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value:''};
  }
    render()
    {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a name here: 
          </label>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='submit' />
        </form>
      );
    }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('The name changed to ' + this.state.value);
    event.preventDefault();
  }
  
}

ReactDOM.render(<NameForm />, document.getElementById('root'));