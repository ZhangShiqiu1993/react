class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <p>Put your life in the hands of a computer</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

