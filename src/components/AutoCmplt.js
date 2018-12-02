import React, {Component} from 'react';
import './AutoCmplt.css'
class AutoComplt extends Component {
    
    state = {
        items :this.props.list,
        suggestions:[],
        inputValue: ''
    }


    onCngHndlr = (e) => {
        const value = e.target.value;
        let suggestionsa = [];
        if(value.length > 0) {
            const regx = new RegExp(`${value}`, 'i');
            suggestionsa = this.state.items.filter(v =>  regx.test(v))
        }
        this.setState({suggestions:suggestionsa, inputValue:value})
    }

    selectSugst(item) {
        this.setState({
            inputValue: item,
            suggestions:[]
        })
    }

    showSuggetion() {
        const {suggestions} = this.state;
        if(suggestions.length ===0) {
            return null;
        }
        return(
            <ul>
                {suggestions.map(item => <li key={item} onClick={() => this.selectSugst(item)}>{item}</li>) }
            </ul>
        )
    }
    
    render() {
        const {inputValue} = this.state; 
        return(
            <div className="AutoCmplt">
                <input type="text" value={inputValue} onChange={this.onCngHndlr} />
                { this.showSuggetion()}
            </div>
        )
    }
}

export default AutoComplt;