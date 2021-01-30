import React from 'react'

const H = (props) => {
    return (
        <div>
            <h1 className='h1'>{props.title}</h1>
            <style>{`
            .h1 {
                text-align: center;
                padding-top: 5px;
                padding-bottom: 5px;
            }
            `} </style>
        </div>
    )
}

export default H
