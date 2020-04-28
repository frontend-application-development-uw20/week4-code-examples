import React from 'react';
import PropTypes from 'prop-types';

class CountdownTimer extends React.Component {
    static propTypes = {
        countFrom: PropTypes.number
    }
    static defaultProps = {
        countFrom: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            count: props.countFrom
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.count <= 0) {
                clearInterval(this.interval);
                return;
            }

            this.setState(state => {
                return {
                    count: state.count - 1
                };
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>
                    {this.state.count}
                </h2>
            </div>
        );
    }
}

export default CountdownTimer;