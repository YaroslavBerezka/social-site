import React, { useEffect, useState } from "react"

export const InputGithub: React.FC<IProps> = React.memo((props) => {
    const {currentTerm, onSubmit} = props;
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        setInputValue(currentTerm as string);
    }, [currentTerm])

    return ( 
            <div>
                <input placeholder="search" 
                       value={inputValue}
                       onChange={(e) => setInputValue(e.currentTarget.value)} />
                {currentTerm !== inputValue && <button onClick={() => onSubmit(inputValue)}>find</button>}
            </div>        
    );
});

interface IProps {
    onSubmit: (value: string) => void
    currentTerm: string | null 
};


