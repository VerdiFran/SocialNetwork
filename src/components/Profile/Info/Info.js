import React from 'react'
import styles from './Info.module.scss'
import BasicInfo from "./BasicInfo/BasicInfo"

const Info = () => {
    return (
        <div className={styles.info}>
            <img src='https://facts.net/wp-content/uploads/2016/02/cat-1046544_1920.jpg'/>
            <BasicInfo/>
        </div>
    )
}

export default Info
