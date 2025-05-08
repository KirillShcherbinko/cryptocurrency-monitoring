import { UserMessageType } from "../types";

export const initialCurrentMessage: UserMessageType = {
  type: "join",
  data: {
    id: "",
    username: "",
    text: "",
    timestamp: "",
  },
};

export const initialState = {
  socket: null,
  userId: "",
  currentMessage: initialCurrentMessage,
  messages: [],
  errorMessages: [],
  isEmpty: true,
};

export const MIN_USERNAME_LENGTH = 3;
export const MAX_USERNAME_LENGTH = 15;
export const MIN_MESSAGE_LENGTH = 1;
export const MAX_MESSAGE_LENGTH = 10000;

export const MAX_ERROR_MESSAGES_LENGTH = 3;
