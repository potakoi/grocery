import { Component } from 'react';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''});
    }

    deletItem() {
        this.setState({groceryList: []})
    }

    render() {
        return(
            <div>
            <div>
                <input 
                placeholder="What do you want to buy?"
                type="text"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                
                <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                <button onClick={() => this.deletItem(this.state.userInput)}>Delete</button>
            </div>

                

            <div>
                <ul>
                    {this.state.groceryList.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            </div>
        )
    }
}