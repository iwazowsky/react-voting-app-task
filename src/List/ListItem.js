import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

function ListItem({ name, initCount, setIsVoted,isVoted}) {
    const [count, setCount] = useState(initCount)
    const handleVoteClick = () => {
        setCount(count + 1)
        setIsVoted(true)
    }
    return (
        <div className="list-item">
            <div className="count"><span>{count}</span></div>
            <div className="lang-name"><span>{name}</span></div>
            <div className="btn"><button disabled={isVoted} onClick={handleVoteClick}>Vote!</button></div>
        </div>
    )
}
ListItem.propTypes = {
    name: PropTypes.string
}
export default ListItem