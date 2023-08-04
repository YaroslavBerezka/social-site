import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { getMessages } from "../../redux/selectors/chat-selectors"
import { MessageChat } from "./MessageChat"

export const Messages: React.FC = React.memo(() => {
    const messages = useSelector(getMessages); 
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 150){
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    };

    useEffect(() => {
        if(isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [messages]);

    return (
        <div style={{height: '400px', overflow: 'auto'}} onScroll={scrollHandler}>
            {messages.map((message) => <MessageChat key={message.id}
                                                    message={message}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
});

