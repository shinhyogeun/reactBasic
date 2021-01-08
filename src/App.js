
import { Component } from 'react';
import List from "./components/list";
import Header from "./components/header";
import Content from "./components/content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "this is a amazing things that you have to keep in mind" },
      content: [
        { id: 1, title: "HTML", desc: "HTML is HyperText" },
        { id: 2, title: "CSS", desc: "CSS is custom ..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is not same with Java ..." }
      ]
    }

  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.subject.title} sub={this.state.subject.sub}></Header>
        <List content={this.state.content}></List>
        <Content titel="HTML" subs="this is a amazing"></Content>
      </div>
    );
  }
}

export default App;
