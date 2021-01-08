import { Component } from 'react';

class List extends Component {

  render() {
    let HTMLArray = this.props.content
      .map(element =>
        <li key={element.id}>
          <a
            href={"/content/" + element.id}
            data-id={element.id}
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, element.id)}>
            {element.title}
          </a>
        </li>)

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