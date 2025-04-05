import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import { useData } from "../../../../hooks/useData";
import { useModal } from "../../../../hooks/useModal";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../../../../UI/Icon/Icon";
import Symbol from "../../../../UI/Symbol/Symbol";
import Paragraph from "../../../../UI/Paragraph/Paragraph";
import { ICryptoData } from "../../types";


export default function CryptoCard() {
  const data = useData<ICryptoData>();
  const { openModal } = useModal();

  return data && (
    <AnimatePresence>
      <motion.div 
        className={Style.CryptoCard}
        onClick={openModal}
        whileHover={{ scale: 1.1 }}
      >
        <Icon
          iconSrc={data.image}
          iconAlt={data.name}
        />
        <Symbol>{data.symbol}</Symbol>
        <Paragraph>{data.current_price}</Paragraph>
        <PercentageIndicator percentage={data.price_change_percentage_24h} />
      </motion.div>
    </AnimatePresence>
  );
}
