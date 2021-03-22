import React, {useEffect, useState} from 'react';
import style from './Status.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditmode] = useState(false);
    let [status, updateStatus] = useState(props.status);
    useEffect(()=>{
        updateStatus(props.status)
    }, [props.status])
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    const activateEditMode = () => {
            setEditmode(true)
        }
    const deActivateEditMode = (e) =>{
            setEditmode(false)
            props.updateStatus(e.currentTarget.value)
        }
    const onStatusChange = (e) => {
            updateStatus(e.currentTarget.value) 
        }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    

        return (
            <>
            {
                !editMode &&
                <div>
                 <b>Status: </b>   <span onDoubleClick={activateEditMode} className={style.h2}>{status || "No Status"}</span>
                </div> 
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
                </div>
            }
                
           
            
            </>
        )

}

export default ProfileStatusWithHooks;