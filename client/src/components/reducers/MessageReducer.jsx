

const MessageReducer = (messages = [], action) =>{
    switch(action.type){
        case "addMessage":
            const newMessages = messages;
            newMessages.push(action.item);
            return newMessages;
        default:
            return messages;
    }
}

export default MessageReducer;