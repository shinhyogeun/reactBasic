import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="/" onClick={function (e) {
                    e.preventDefault()
                    this.props.onChangePage()
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.subs}
            </header>
        )
    }
}

export default Header