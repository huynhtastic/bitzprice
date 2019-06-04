import React from 'react';

class Prices extends React.Component<any, any> {
    state = {
        currency: 'USD'
    }

    render(): React.ReactNode {
        const { [this.state.currency]: {code, description, rate} } = this.props.bpi.bpi;
        return (<div>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for {description}:
                    <span className="badge badge-primary">{code}</span>
                    <strong>{rate}</strong>
                </li>
            </ul>
            <br />
            <select onChange={e => this.setState({currency: e.target.value})}
                className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
        </div>);
    }
}

export default Prices;
