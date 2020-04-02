import React from 'react'
import styles from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {

    state = {
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
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode
                        ? <div className={styles.statusContainer}>
                            <div onClick={this.activateEditMode}>
                                {this.props.status === "" ? " " : this.props.status}
                            </div>
                        </div>
                        : <div className={styles.statusEditContainer}>
                            <input
                                value={this.state.statusText}
                                onChange={this.onStatusChange}
                                onBlur={this.deactivateEditMode}
                                autoFocus={true}
                            />
                        </div>
                }
            </>
        )
    }

}

export default ProfileStatus