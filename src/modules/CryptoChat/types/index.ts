export type UserMessageType = {
  username: string,
  text: string,
  timestamp: Date,
}

export type SystemMessageType = {
  text: string,
  timestamp: Date,
}

export type MessageType = {
  type: 'user' | 'system',
  data: UserMessageType | SystemMessageType,
}