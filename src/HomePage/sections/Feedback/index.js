import React from 'react';
import UserFeedback from '../../../components/UserFeedback';
import { USERSFEEDBACK } from '../../../dataRequest/USERSFEEDBACK';
import './feedback.css';

export default function Feedback() {

    const data = USERSFEEDBACK;

    return (
        <section className="feedback-section">
            <div className="feedbackTitle">
                <h2>O que os clientes dizem</h2>
            </div>
            <div className="feedbackContent">
                {data.map((item, index) => (
                    <div className="feedbackItem" key={index}>
                        <UserFeedback data={item}/>
                    </div>
                ))}
            </div>
        </section>
    )
}