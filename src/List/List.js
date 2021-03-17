import React, { useState } from 'react'
import ListItem from './ListItem'
import './List.css';

function List({ languages }) {
    const [isVoted, setIsVoted] = useState(false)
    return (
        <div className="list-wrapper">
            {languages.map(item => {
                return (
                    <ListItem
                        setIsVoted={setIsVoted}
                        isVoted={isVoted}
                        key={item.name}
                        initCount={item.voteCount}
                        name={item.name} />
                )
            })}
        </div>
    )
}
export default List