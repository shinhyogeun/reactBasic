
import { Component } from 'react';
import List from "./components/list";
import Header from "./components/header";
import Content from "./components/content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="WEB" sub="this is a amazing things that you have to keep in mind"></Header>
        <List></List>
        <Content titel="HTML" subs="this is a amazing"></Content>
      </div>
    );
  }
}

export default App;
