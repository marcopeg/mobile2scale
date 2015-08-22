import React from 'react';
import { connect } from 'react-redux';

import { changePage } from 'app/actions';
import Menu from './menu';

@connect(state => state)
export default class App extends React.Component {
    navigate = (e) => {
        e.preventDefault();
        var { dispatch } = this.props;
        var uri = e.target.href.split('/').pop();
        dispatch(changePage(uri));
    }
    render() {
        var { pages, params } = this.props;
        return (
            <div className="container">
                <Menu onClick={this.navigate} />
                <hr />
                {this.props.children}
            </div>
        );
    }
}
