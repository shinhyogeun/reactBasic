import { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="/content/prosecc" method="post" onSubmit={function (e) {
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    )
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="titile"></input></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><button type="submit">갱신</button></p>
                </form>
            </article>
        )
    }
}

export default CreateContent