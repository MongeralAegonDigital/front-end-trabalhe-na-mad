import React, { Component }  from 'react';

class CampoBusca extends Component {

    render() {
        return (
            <input type={this.props.type} id={this.props.id} className={this.props.id}/>
        )
    }

}

export default CampoBusca;
