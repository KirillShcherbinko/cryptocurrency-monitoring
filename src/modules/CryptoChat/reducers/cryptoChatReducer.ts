import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_MESSAGE_LENGTH,
  MAX_MESSAGE_LENGTH,
} from "../constants";
import { CryptoChatActionType, CryptoChatStateType } from "../types";

const addErrorMessage = (state: CryptoChatStateType, text: string) => ({
  ...state,
  errorMessages: [
    { id: crypto.randomUUID(), text },
    ...state.errorMessages,
  ],
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

    case "set_current_message": {
      const { type, data } = action.payload;
      const text = data.text.trim();

      if (type === "join") {
        if (text.length < MIN_USERNAME_LENGTH) {
          return addErrorMessage(state, "Name is too short");
        }
        if (text.length > MAX_USERNAME_LENGTH) {
          return addErrorMessage(state, "Name is too long");
        }
      } else {
        if (text.length < MIN_MESSAGE_LENGTH) {
          return addErrorMessage(state, "Message is too short");
        }
        if (text.length > MAX_MESSAGE_LENGTH) {
          return addErrorMessage(state, "Message is too long");
        }
      }

      if (!data.id) data.id = state.userId;
      if (type === "join") data.username = text;

      return {
        ...state,
        currentMessage: {
          type: "user",
          data: { ...data, text: "" },
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
