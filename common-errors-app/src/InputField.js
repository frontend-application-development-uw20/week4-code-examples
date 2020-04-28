import React from 'react';

export default class InputField extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: ''
    //     };
    // }
    state = { value: '' }

    onChange = (e) => {
        e.preventDefault();
        // this.setState({ value: e.target.value }, () => {
        //     console.log(this.state);
        // });
        this.setState(prevState => {
            for (let i = 0; i < 5; i++) {
                console.log('this should happen first?');
            }
            console.log('this should happen second?');
        })
    }

    alertState = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        const { hide } = this.props;

        return (
            <>
                <div className={hide ? 'hide-element' : ''}>
                    <button onClick={this.alertState}>
                        What's the state?
                    </button>
                    <input
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                </div>
                <div><strong>Some additional text</strong></div>
            </>
        )
    }
}