
import { Component } from 'react';
import List from "./components/list";
import Header from "./components/header";
import Content from "./components/content";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "read",
      subject: { title: "WEB", desc: "this is a amazing things that you have to keep in mind" },
      welcome: { title: "Welcome", desc: "hello,react!!" },
      content: [
        { id: 1, title: "HTML", desc: "HTML is HyperText" },
        { id: 2, title: "CSS", desc: "CSS is custom ..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is not same with Java ..." }
      ]
    }

  }
  render() {
    let _title, _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === "read") {
      _title = this.state.content[0].title
      _desc = this.state.content[0].desc
    }
    return (
      <div className="App">
        <Header
          title={this.state.subject.title}
          subs={this.state.subject.desc}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            })
          }.bind(this)}></Header>
        <List content={this.state.content}></List>
        <Content title={_title} subs={_desc}></Content>
      </div>
    );
  }
}

export default App;
