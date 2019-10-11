class Form extends React.Component {
    state = { companyName: '' };
   
      render() {
        return (
          <form>
        <span className="formtext">&#x3C;Form /&#x3E;</span>
            <input 
            type="text" 
            value={this.state.companyName}
            onChange={event => this.setState({ companyName: event.target.value })}
            placeholder="Enter Company Name" 
            required 
          />
          <button>Go!</button>
          </form>
      );
    }
  }

  export default Form;