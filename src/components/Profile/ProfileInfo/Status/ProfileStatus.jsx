import React, { Component } from 'react';
import style from './Status.module.css';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    
    render(){
        return (
            <>
            {
                !this.state.editMode &&
                <div>
                    <h2 onDoubleClick={this.activateEditMode} className={style.h2}>{this.props.status || "No Status"}</h2>
                </div> 
            }
            {
                this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                </div>
            }
                
           
            
            </>
        )
    }
}

export default ProfileStatus;