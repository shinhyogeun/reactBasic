
import { Component } from 'react';
import List from "./components/list";
import Header from "./components/header";
import Content from "./components/content";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "welcome",
      selectedContentID: 2,
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
      let i = 0

      while (i < this.state.content.length) {
        let data = this.state.content[i]

        if (data.id === this.state.selectedContentID) {
          _title = data.title;
          _desc = data.desc;
          break;
        }

        i += 1
      }
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
        <List
          content={this.state.content}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selectedContentID: Number(id)
            })
          }.bind(this)}></List>
        <Content title={_title} subs={_desc}></Content>
      </div>
    );
  }
}

export default App;
