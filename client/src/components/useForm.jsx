import React, {useState} from 'react';

function useForm(callback) {
    const [input, setInput] = useState({});

    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
        }
        callback();
    }

    const handleInputChanges = (event) =>{
        setInput({
            ...input,
            [event.target.name]:event.target.value
        });
    };

    return {
        handleSubmit,
        handleInputChanges,
        input,
        setInput
    }
}

export default useForm;