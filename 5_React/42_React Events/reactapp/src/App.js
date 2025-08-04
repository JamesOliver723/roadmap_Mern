import { Component } from 'react';

class App extends Component{

    state = {
        firstname: '',
        message: '',
        key: ''
    }

    greetPeople = () => {
        alert("This is alert from greet people");
    }

    handleClick = (e) => {
        // console.log(e);
        this.setState({
            message: "state change by handleClick"
        })
    }

    handleMouseMove = (e) => {
        this.setState({
            message: "mouse moved",
        })
    }

    handleCopy = (e) => {
        this.setState({
            message: "Text Copied!!"
        })
    }

    handleKeyPress = (e) => {
        this.setState({
            message: "Key Pressed"
        })
    }

    handleChange = (e) => {
        this.setState({
            firstname: e.target.value,
            message: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            message:'Form Submitted'
        })
    }

  render() {
  const {
    message,
    greetPeople,
    handleClick,
    handleMouseMove,
    handleCopy,
    handleKeyPress,
    handleChange,
    handleSubmit
  } = this;

  return (
    <div className="app-container">
      <h1>{message}</h1>

      <section className="button-group">
        <button type="button" onClick={greetPeople}>Greet</button>
        <button type="button" onClick={handleClick}>Trigger Click</button>
        <button type="button" onMouseMove={handleMouseMove}>Track Mouse</button>
      </section>

      <p onCopy={handleCopy} style={{ userSelect: 'text', cursor: 'copy' }}>
        Try copying this text.
      </p>

      <input
        type="text"
        placeholder="Type here"
        onKeyPress={handleKeyPress}
        aria-label="Typing Field"
      />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App
