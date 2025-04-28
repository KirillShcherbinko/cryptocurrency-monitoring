export type UserMessageType = {
  username: string,
  text: string,
  timestamp: string,
}

export type SystemMessageType = {
  text: string,
  timestamp: string,
}

export type BaseMessageType<T> = {
  type: 'join' | 'user' | 'system';
  data: T;
}

export type JoinMessage = BaseMessageType<UserMessageType> & { type: 'join' };
export type UserMessage = BaseMessageType<UserMessageType> & { type: 'user' };
export type SystemMessage = BaseMessageType<SystemMessageType> & { type: 'system' };

export type MessageType = JoinMessage | UserMessage | SystemMessage;