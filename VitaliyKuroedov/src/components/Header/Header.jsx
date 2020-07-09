import React, {Component, Fragment} from 'react'

export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <header className="header">
                <h2 className="header__title">{this.props.title}</h2>
            </header>
        )
    }
}