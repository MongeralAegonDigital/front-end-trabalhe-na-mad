import React, {PropTypes} from 'react';

export default class Generic extends React.Component {
    constructor(props, context) {
        super(props);
    };

};

Generic.contextTypes = {
    router: PropTypes.object
};