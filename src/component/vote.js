import React, { useState, useEffect } from 'react'
import './vote.css';
import { BsHandThumbsDown } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { Sentry } from "react-activity";
import "react-activity/dist/library.css";
import { getLikes, addVote } from '../services/firebase'

export const Vote = () => {
    const [likes, setLikes] = useState(null)
    const [isLiked, setIsLiked] = useState(false)
    const [dislike, setDislike] = useState(false)

    const formatter = new Intl.NumberFormat('en-US', {
        //style: 'currency',
        //currency: 'USD',
        minimumFractionDigits: 0
    })

    useEffect(() => {
        getLikes(data)
    }, [])

    const data = (info) => {
        let num = formatter.format(info)
        setLikes(num)
    }
    const vote = (type) => {
        if (type === 1) {
            if (!isLiked) {
                setDislike(false)
                addVote()
                setIsLiked(true)
            }
        }
        else if (type === 2) {
            if (!dislike) {
                setIsLiked(false)
                setDislike(true)
            }
        }
    }
    return (
        <div className='vote-card'>
            <div className='big-circle'>
                <div className='small-circle'>
                    {likes ?
                        <h4>{likes} likes</h4> : <Sentry size={25} />}
                    <div className='vote'>
                        <button className={isLiked ? 'pressedLike' : 'button'} onClick={() => vote(1)}>
                            <div className='divButton'><BsHandThumbsUp className={isLiked && 'pressedLike'} /> Like</div>
                        </button>
                        <button className={dislike ? 'pressedDislike' : 'button'} onClick={() => vote(2)}>
                            <div className='divButton'><BsHandThumbsDown className={dislike && 'pressedDislike'} /> Dislike</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
