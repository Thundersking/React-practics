// React 
// Конвертирование валют


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            option: ['RUB', 'USD', 'EUR'],
            cur1: 'USD',
            cur2: 'RUB',
            value: '',
            excRates: {
                'RUB/USD': 0.013,
                'USD/RUB': 76,
                'EUR/RUB': 89,
                'RUB/EUR': 0.8487,
                'USD/EUR': 0.8468,
                'EUR/USD': 1.181
            },
            result: ''
        };
    }

    submitForm(event) {
        if(this.state.cur1 == this.state.cur2) {
            this.setState({result: 'Change different currencies'})
        } else {
            let params = this.state.cur1 + '/' + this.state.cur2;
            let rates = this.state.excRates[params];
            let result = parseInt(this.state.value) * rates;
            this.setState({result: result});
        }
        event.preventDefault();
    }

    handleSelectChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    handleInputChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        const options = this.state.option.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        });

        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    <input className='input-text' placeholder='Введите сумму' value={this.state.value} onChange={this.handleInputChange.bind(this)} />
                    <select name="cur1" onChange={this.handleSelectChange.bind(this)}>
                        {options}
                    </select>
                    <select name="cur2" onChange={this.handleSelectChange.bind(this)}>
                        {options}
                    </select>
                    <input type='submit' />
                </form>
                <p>Конвертирование валют: {this.state.result}</p>
            </div>
        )
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
)