import React from 'react'
import styles from './Info.module.scss'
import BasicInfo from "./BasicInfo/BasicInfo"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const Info = ({profile, status, updateStatus}) => {
    return (
        <div className={styles.info}>
            <img src={profile.photos.large} alt=''/>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <BasicInfo info={profile}/>
        </div>
    )
}

export default Info
