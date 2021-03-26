// React 
// Дан селект. Изначально он пустой. Дан инпут и кнопка. В этот инпут вводится название города. 
// По нажатию на кнопку этот город должен попасть в селект. Пользователь нашего скрипта добавляет несколько 
// городов в селект, затем выбирает один из добавленных городов - и этот город должен отобразиться на экране в каком-нибудь абзаце.


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {option: [], value: '', selectUser: ''};
    }

    submitSelect(event) {
        this.state.option.push(this.state.value);
        this.setState({option: this.state.option, value: ''});
        event.preventDefault();
    }

    selectOption(event) {
        this.setState({selectUser: event.target.value});
    }

    handleInputChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const option = this.state.option.map((item, index) => {
            return <option key={index} value={index}>{item}</option>
        });

        return (
            <div>
                <select onChange={this.selectOption.bind(this)}>
                    {option}
                </select>
                <form onSubmit={this.submitSelect.bind(this)}>
                    <input className="input-text" placeholder="Введите название города" value={this.state.value} onChange={this.handleInputChange.bind(this)} />
                    <input type="submit" />
                </form>
                <p>Ваш город: {this.state.option[this.state.selectUser]}</p>
            </div>
        )
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
)