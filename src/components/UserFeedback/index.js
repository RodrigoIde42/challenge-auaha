import React from 'react';

export default function UserFeedback({data}) {
    return (
        <div className="userFeedback">
            <h3>{data.name}</h3>
            <p>{data.feedback}</p>
            <p className="gray-txt">{data.date}</p>
        </div>
    )
}