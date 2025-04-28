import { useState, useEffect } from "react";
import io from "socket.io-client";
import { MessageType } from "../../types";
import CryptoChatBody from "./CryptoChatBody/CryptoChatBody";
import CryptoChatFooter from "./CryptoChatFooter/CryptoChatFooter";
import Socket = SocketIOClient.Socket;


export default function CryptoChatModal() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');   
  const [messages, setMessages] = useState<MessageType[]>([]);
  
  useEffect(() => {
      const newSocket = io('http://localhost:5000', {
        transports: ['websocket', 'polling'],
      });
  
      newSocket.on('connect', () => {setSocket(newSocket)});
  
      newSocket.on('receive message', (message: MessageType) => {
        setMessages(prev => [...prev, message]);
      });
  
      newSocket.on('error', (error: string) => {
        setErrorMessage(error);
        console.log(errorMessage);
      })
  
      newSocket.on('disconnect', () => setSocket(null));

      return () => {newSocket.disconnect()};
    }, []);
  

  return (
    <div>
      <CryptoChatBody messages={messages} />
      <CryptoChatFooter socket={socket} />
    </div>
  );
}