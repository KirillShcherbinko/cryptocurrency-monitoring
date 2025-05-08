import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_MESSAGE_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_ERROR_MESSAGES_LENGTH,
} from "../constants";
import { CryptoChatActionType, CryptoChatStateType } from "../types";

const addErrorMessage = (state: CryptoChatStateType, text: string) => ({
  ...state,
  errorMessages: [
    ...state.errorMessages,
    { id: crypto.randomUUID(), text },
  ].slice(-MAX_ERROR_MESSAGES_LENGTH),
});

export const cryptoChatReducer = (
  state: CryptoChatStateType,
  action: CryptoChatActionType
) => {
  switch (action.type) {
    case "set_socket": {
      const socket = action.payload;
      const userId = socket ? socket.id : "";
      return {
        ...state,
        socket,
        userId,
      };
    }

    case "set_is_empty": {
      return {
        ...state,
        isEmpty: action.payload,
      };
    }

    case "set_current_message": {
      const { type, data } = action.payload;
      const text = data.text.trim();
      const socket = state.socket;
      if (!socket) return state;

      if (type === "join") {
        if (text.length < MIN_USERNAME_LENGTH) {
          return addErrorMessage(
            state,
            `${text} contains an insufficient number of characters`
          );
        }
        if (text.length > MAX_USERNAME_LENGTH) {
          return addErrorMessage(state, `${text} contains too many characters`);
        }

        socket.emit("join chat", data);
        return {
          ...state,
          currentMessage: {
            type: "user" as "user",
            data: {
              ...data,
              username: text,
              text: "",
            },
          },
        };
      }

      if (text.length < MIN_MESSAGE_LENGTH) {
        return addErrorMessage(
          state,
          "Message contains an insufficient number of characters"
        );
      }
      if (text.length > MAX_MESSAGE_LENGTH) {
        return addErrorMessage(state, "Message contains too many characters");
      }

      socket.emit("send message", data);
      return {
        ...state,
        currentMessage: {
          type: "user" as "user",
          data: {
            ...data,
            text: "",
          },
        },
      };
    }

    case "add_message": {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    }

    case "remove_error_message": {
      return {
        ...state,
        errorMessages: state.errorMessages.filter(
          (errorMessage) => errorMessage.id !== action.payload
        ),
      };
    }

    default: {
      return state;
    }
  }
};
