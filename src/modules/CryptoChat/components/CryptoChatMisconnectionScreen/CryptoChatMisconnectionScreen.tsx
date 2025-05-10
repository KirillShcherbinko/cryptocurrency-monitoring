import Style from "./CryptoChatMisconnectionScreen.module.css";
import MisconnectionScreen from "../../../../assets/no-chat-connection-screen.png";
import ErrorScreen from "../../../../components/ErrorScreen/ErrorScreen";

export default function CryptoChatMisconnectionScreen() {
  return (
    <div className={Style.CryptoChatMisconnectionScreen}>
      <ErrorScreen
        title="Something went wrong"
        description="We're having some difficulties. Please try again"
        image={MisconnectionScreen}
      />
    </div>
  );
}
