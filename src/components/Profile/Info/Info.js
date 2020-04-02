import React from 'react'
import styles from './Info.module.scss'
import BasicInfo from "./BasicInfo/BasicInfo"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const Info = (props) => {
    return (
        <div className={styles.info}>
            <img src={props.profile.photos.large} alt=''/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <BasicInfo info={props.profile}/>
        </div>
    )
}

export default Info
