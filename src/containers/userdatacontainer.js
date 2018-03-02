import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserDataViewer from '../views/userdataviewer.js';

class UserDataContainer extends Component {

    componentWillMount() {
        let self = this;
    }

    componentWillReceiveProps(currentProps) {

    }

    render() {
        let self = this;

        return (
            <div>
                <UserDataViewer {...self.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);