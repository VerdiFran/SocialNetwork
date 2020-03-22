import React from 'react'
import styles from './BasicInfo.module.scss'

const BasicInfo = (props) => {
    return (
        <div className={styles.info}>
            <div className={styles.name}>{props.info.fullName}</div>
            <div>{props.info.aboutMe}</div>
            <div>{props.info.lookingForAJobDescription}</div>
            <div>{props.info.contacts.website}</div>
            <div>{props.info.contacts.instagram}</div>
        </div>
    )
}

export default BasicInfo
