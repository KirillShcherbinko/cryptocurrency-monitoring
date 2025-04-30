import { JoinMessage, UserMessageType } from "../types";

const data: UserMessageType = {
  id: '',
  username: '',
  text: '',
  timestamp: '',
} 

export const initialChatState: JoinMessage = {
  type: 'join',
  data: data,
}

export const MIN_USERNAME_LENGTH = 3;
export const MAX_USERNAME_LENGTH = 15;
export const MIN_MESSAGE_LENGTH = 1;
export const MAX_MESSAGE_LENGTH = 10000;