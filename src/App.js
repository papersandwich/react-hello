import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        count: 59,
    }

    increment = () => {
        console.log("increment!");

        this.setState({
            count: this.state.count + 1,
        })
    }

    decrement = () => {
        console.log("decrement!");

        this.setState({
            count: this.state.count - 1,
        })
    }

    className = (settings) => {
        const classes = Object.keys(settings);
        const activatedClasses = [];

        //method 1
        for (let i=0;i<classes.length;i++){
            const name = classes[i];
            if (settings[name]){
                activatedClasses.push(name);
            }
        }

        //method 2
        for (let className in settings){
            if(settings[className]){
                activatedClasses.push(className);
            }
        }

        //method3
        return Object.keys(settings).filter( className => settings[className]).join(' ')

        //for method 1&2
        //return activatedClasses.join(' ');
    }
    
    //if you need to return more than one element use ( )
    render() {
        return (
            <>
                <h1 style={{fontSize: `${this.state.count}px`}} className="heading">{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

                <h4 className={this.className({result: true, pass: this.state.count >= 60, fail: this.state.count<60})}>New Result: {this.state.count >= 60 ? 'Pass' : 'Fail'}</h4>

                {this.state.count >= 60 ? <h4>Result: pass</h4>:<h4>Result: failed</h4>}
                {this.state.count >= 60 && <h4>Result: pass</h4>}
                {this.state.count <60 && <h4>Result: failed</h4>} 
            </>
        );
    }


}

export default App;