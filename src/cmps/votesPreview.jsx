import React, { useState, useEffect } from 'react'
import { votesService } from '../votesService';

export default function VotesPreview({ color, maxVotes, onColorClick }) {

    const [currColor, setColor] = useState(null)

    useEffect(() => {
        setColor(color)
    }, [])


    function getWidth() {
        return (200 * (currColor.votes / maxVotes)) + 'px'
    }

    function incVote(currColor) {
        currColor.votes++
        onColorClick(currColor)
        setColor(currColor)
        votesService.incVote(currColor)
    }
    if (!currColor) return <h1>Loading..</h1>
    return (
        <div className="square" style={{ backgroundColor: currColor.color }} onClick={() => incVote({ ...currColor })} >
            { currColor.color}
            < div style={{ width: getWidth(), backgroundColor: 'lightblue', margin: '10px', padding: '4px' }}>
                {currColor.votes}
            </div >
        </div >
    )
}


