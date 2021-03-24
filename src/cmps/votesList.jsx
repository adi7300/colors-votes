import React from 'react'
import VotesPreview from './votesPreview'

export default function votesList({ colors, maxVotes, onColorClick }) {

    return (
        <div className="list-cmp" >
            {colors.map(color => {
                return <VotesPreview key={color.id} color={color} maxVotes={maxVotes} onColorClick={onColorClick} />
            })}
        </div>
    )
}
