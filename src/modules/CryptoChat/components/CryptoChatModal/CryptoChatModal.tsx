import CryptoChatBody from "./CryptoChatBody/CryptoChatBody";
import CryptoChatFooter from "./CryptoChatFooter/CryptoChatFooter";

export default function CryptoChatModal() {
  return (
    <div>
      <CryptoChatBody>chat</CryptoChatBody>
      <CryptoChatFooter />
    </div>
  );
}