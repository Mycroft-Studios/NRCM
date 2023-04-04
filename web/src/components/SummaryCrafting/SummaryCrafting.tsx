import "./SummaryCrafting.css";
import SummaryRequiredItem from "../SummaryRequiredItem/SummaryRequiredItem";
import { CraftableItem } from "../../typings/Items";

interface SummaryCraftingProps {
    items: CraftableItem[];
}

const SummaryCrafting = ({ items }: SummaryCraftingProps) => {

  return (
    <div className="summary-crafting-item">
        <h2 className="summary-crafting-header">Items Crafted</h2>
        <div className="well-thats-too-damn-bad">
            {items.map((item: CraftableItem) => {
                const amount = item.amountSelected || 0;
                return amount > 0 ? <SummaryRequiredItem key={item.name} name={item.label} amount={amount} image={item.image} /> : null
            })}
        </div>
    </div>
  );
};

export default SummaryCrafting