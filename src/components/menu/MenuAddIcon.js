import React, { Component } from 'react'
import addicon from '../../assets/addicon.png'

export default class MenuAddIcon extends Component {

    render() {
        return (
            <>       
            <button onClick={this.updateModal1} className={this.props.classname}>
                <div><img src={addicon} alt=" " className="icon" /></div>
            </button>
            </>
        )
    }
}
