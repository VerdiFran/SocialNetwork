import React from 'react'
import styles from './Info.module.scss'
import BasicInfo from "./BasicInfo/BasicInfo"
import Preloader from "../../common/Preloader"

const Info = (props) => {
    return (
        <div className={styles.info}>
            <img src={props.profile.photos.large} alt=''/>
            <BasicInfo info={props.profile}/>
        </div>
    )
}

export default Info
