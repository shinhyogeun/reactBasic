
import { Component } from 'react';
import List from "./components/list";
import Header from "./components/header";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/control";

class App extends Component {

  constructor(props) {
    super(props);
    this.maxIndex = 3;
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
    };
  }

  getContent() {
    let _title, _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} subs={_desc}></ReadContent>

    } else if (this.state.mode === "read") {
      let _content = this.getReadContent()
      _article = <ReadContent title={_content.title} subs={_content.desc}></ReadContent>

    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.maxIndex += 1;
        let replacedContent = this.state.content.concat({ id: this.maxIndex, title: _title, desc: _desc });
        this.setState({ content: replacedContent })
      }.bind(this)}></CreateContent>

    } else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function (_id, _title, _desc) {

          console.log(this.state.content)
          let contents = Array.from(this.state.content)
          console.log(contents)

          let i = 0
          while (i < contents.length) {
            if (contents[i].id === _id) {
              contents[i] = { id: _id, titel: _title, desc: _desc };
              break;
            }
            i += 1
          }
          console.log(contents)

          this.setState({ content: contents })
        }.bind(this)
      }></UpdateContent >
    }

    return _article;
  }

  getReadContent() {
    let i = 0

    while (i < this.state.content.length) {
      let data = this.state.content[i]

      if (data.id === this.state.selectedContentID) {
        return data
      }

      i += 1
    }
  }

  render() {


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
        <Control onChangeMode={function (_mode) {
          this.setState({ mode: _mode })
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
