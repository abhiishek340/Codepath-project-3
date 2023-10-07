




import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = (props) => {
    console.log("THis is the image", props.image);

    const [event, setEvent] = useState([])
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])



    return (
        <article className='event-information'>
            <img src={props.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p> {props.performer}</p>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {props.date} <br /> {time}</p>
                    <p id={`remaining-${props.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event

/**
 * 
    useEffect(() => {
        (async () => {
            try {
                const timeRemaining = await dates.formatRemainingTime(event.remaining)
                setRemaining(timeRemaining)
                dates.formatNegativeTimeRemaining(remaining, event.id)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])


    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventsById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const result = await dates.formatTime(event.time)
                setTime(result)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])
 */
