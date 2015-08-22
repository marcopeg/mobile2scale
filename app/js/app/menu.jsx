import React from 'react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

export default class Menu extends React.Component {
    static defaultProps = {
        onClick: null
    };
    render() {
        var { onClick } = this.props;
        return (
            <div style={{marginTop:20}}>
                <ButtonGroup>
                    <Button href="/" onClick={onClick}>Client</Button>
                    <Button href="/dashboard" onClick={onClick}>Dashboard</Button>
                    <Button href="/consumer" onClick={onClick}>Consumer</Button>
                </ButtonGroup>
            </div>
        );
    }
}
