import React from "react";
import { Chat } from "./Chat";

const ChatPage: React.FC = React.memo(() => {
    return (
        <div>
            <Chat />
        </div>
    );
});

export default ChatPage;