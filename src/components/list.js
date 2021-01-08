import { Component } from 'react';

class List extends Component {

  render() {
    let HTMLArray = this.props.content
      .map(element => <li key={element.id}><a href={"/content/" + element.id}>{element.title}</a></li>)

    return (
      <nav>
        <ul>
          {HTMLArray}
        </ul>
      </nav>
    )
  }
}

export default List