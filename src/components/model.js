import React, {PropTypes} from 'react';
import { URLGITHUB } from '../config'

export default class Generic extends React.Component {
    constructor(props, context) {
        super(props);
    };
};

export class Collection extends Generic {
    constructor(props, context) {
        super(props);
        this.state = {
            loading: true
        }
    };

    componentDidMount() {
        this.fetchData();
    };

    urlRoot() {
        return '';
    };

    fetchData() {
        fetch(`${URLGITHUB}${this.urlRoot()}`)
        .then(response => response.json())
        .then((response) => this.props.add(response))
        .then(() => this.setState({loading: false}))
        .catch((error) => console.error(error))
    };
};

Generic.contextTypes = {
    router: PropTypes.object
};