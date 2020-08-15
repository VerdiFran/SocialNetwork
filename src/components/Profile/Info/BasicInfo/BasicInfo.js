import React from 'react'
import styles from './BasicInfo.module.scss'

const BasicInfo = ({info}) => {
    return (
        <div className={styles.info}>
            <div className={styles.name}>{info.fullName}</div>
            <div>{info.aboutMe}</div>
            <div>{info.lookingForAJobDescription}</div>
            <div>{info.contacts.website}</div>
            <div>{info.contacts.instagram}</div>
        </div>
    )
}

export default BasicInfo
