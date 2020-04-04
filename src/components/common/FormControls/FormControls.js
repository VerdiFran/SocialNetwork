import React from "react"
import styles from './FormControls.module.scss'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={hasError && [styles.error, styles.formControl].join(' ')}>
            <textarea {...input} {...props} />
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}