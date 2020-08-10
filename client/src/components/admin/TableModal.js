import React from 'react'
import './TableModal.scss'
export default function TableModal(props) {
    return (
        <table>
             {props.children}
        </table>
    )
}
