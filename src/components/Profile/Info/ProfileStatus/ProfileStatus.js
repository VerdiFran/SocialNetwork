import React, {useEffect, useState} from 'react'
import styles from './ProfileStatus.module.scss'

const ProfileStatus = (props) => {

    /*state = {
        editMode: false,
        statusText: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus(this.state.statusText)
    }

    onStatusChange = (e) => {
        this.setState({
            statusText: e.target.value
        })
    }*/

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {
                !editMode
                    ? <div className={styles.statusContainer}>
                        <div onClick={activateEditMode}>
                            {props.status === '' ? ' ' : props.status}
                        </div>
                    </div>
                    : <div className={styles.statusEditContainer}>
                        <input
                            value={status}
                            onChange={onStatusChange}
                            onBlur={deactivateEditMode}
                            autoFocus={true}
                        />
                    </div>
            }
        </>
    )

}

export default ProfileStatus