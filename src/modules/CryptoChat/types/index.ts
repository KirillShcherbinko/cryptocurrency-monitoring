import Socket = SocketIOClient.Socket;

////////// Типы для сообщений //////////
type UserMessageDataType = {
  id: string;
  username: string;
  text: string;
  timestamp: string;
};

type SystemMessageDataType = {
  id: string;
  text: string;
  timestamp: string;
};

type BaseMessageType<T> = {
  type: "join" | "user" | "system";
  data: T;
};

export type UserMessageType = BaseMessageType<UserMessageDataType> & {
  type: "user" | "join";
};
export type SystemMessageType = BaseMessageType<SystemMessageDataType> & {
  type: "system";
};

export type MessageType = UserMessageType | SystemMessageType;

export type ErrorMessageType = {
  id: string,
  text: string,
};

////////// Типы для чата //////////
export type CryptoChatStateType = {
  socket: Socket | null,
  userId: string,
  currentMessage: UserMessageType,
  messages: MessageType[],
  errorMessages: ErrorMessageType[],
  isEmpty: boolean,
};

type SocketStateType = {
  type: "set_socket",
  payload: Socket | null,
};

type IsEmptyStateType = {
  type: "set_is_empty",
  payload: boolean,
}

type CurrentMessageStateType = {
  type: "set_current_message",
  payload: UserMessageType,
}

type MessageDataStateType = {
  type: "add_message",
  payload: MessageType,
};

type ErrorMessageDataStateType = {
  type: "remove_error_message",
  payload: string,
};

export type CryptoChatActionType =
  | SocketStateType
  | IsEmptyStateType
  | CurrentMessageStateType
  | MessageDataStateType
  | ErrorMessageDataStateType;

export type CryptoChatDataType = {
  userId: string;
  messages: MessageType[];
};

export type FooterDataType = {
  messageData: UserMessageType;
  isEmpty: boolean;
};
