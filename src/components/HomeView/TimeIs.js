import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }

    render() {
        return (
            <div className="hora">
                <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
            </div>
            );
        }
}

export const TimeIs = () => {
    return (
        <div>
            <Clock />
        </div>
    );
}