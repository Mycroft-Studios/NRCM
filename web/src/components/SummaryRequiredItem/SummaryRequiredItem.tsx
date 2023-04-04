import './SummaryRequiredItem.css'
import { useConfig } from '../../providers/ConfigProvider';

interface SummaryRequiredItemProps {
  name: string;
  amount: number;
  image: string;
  redText?: boolean;
}

const SummaryRequiredItem = ({ name, amount, image, redText }: SummaryRequiredItemProps) => {

  const imagePath = useConfig().config.imagePath;

  return (
    <div className="summary-required-item-container">
        <img className="summary-item-image" src={imagePath + image} alt="Broke"/> <p className={redText ? "red-text" : undefined}>{name} [x{amount}]</p>
    </div>
  );
}

export default SummaryRequiredItem