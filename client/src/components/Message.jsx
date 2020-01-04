import React from 'react';

const Message = ({item}) => {

    return (
        <div>
            <h1>{item.firstName} {item.lastName}</h1>
            <p>{item.message}</p>
        </div>
    );
}

export default Message;