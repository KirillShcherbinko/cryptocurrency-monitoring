import Style from "./CryptoChatEmptyScreen.module.css";
import EmtptyScreen from "../../../../assets/empty-chat-screen.png";
import ErrorScreen from "../../../../components/ErrorScreen/ErrorScreen";

export default function CryptoChatEmptyScreen() {
  return (
    <div className={Style.CryptoChatEmptyScreen}>
      <ErrorScreen
        title="Your chat is empty"
        description="Enter your name and start chatting"
        image={EmtptyScreen}
      />
    </div>
  );
}
