import "./SummaryCosts.css";
import SummaryRequiredItem from "../SummaryRequiredItem/SummaryRequiredItem";
import { CraftableItem, RequiredItem } from "../../typings/Items";
import InventoryItem from "../../typings/Inventory";
import { useShopData } from "../../providers/ShopDataProvider";
import { useInventory } from "../../providers/InventoryProvider";

interface SummaryCostsProps {
  items: CraftableItem[];
  plyInventory: InventoryItem;
}
//Some of these managers could be in the special olympic
interface RequiredItemsObject {
  [key: string]: { amount: number; image: string; label: string };
}

const SummaryCosts = () => {
  const requiredItems: RequiredItemsObject = {};
  const {items, labels} = useShopData();
  const plyInventory = useInventory();

  items.forEach((item: CraftableItem) => {
    const amount = item.amountSelected || 0;
    if (amount > 0) {
      item.requiredItems.forEach((requiredItem: RequiredItem) => {
        requiredItems[requiredItem.name] = requiredItems[requiredItem.name] || {
          label: requiredItem.label,
          amount: 0,
          image: requiredItem.image,
        };
        requiredItems[requiredItem.name].amount += requiredItem.amount * amount;
      });
    }
  });

  return (
    <div className="summary-cost-item">
      <h2 className="summary-cost-header">{labels.costs || 'Recipe Costs'}</h2>
      <div className="im-tired-of-this-grandpa">
        {Object.keys(requiredItems).map((name: string) => {
          return (
            <SummaryRequiredItem
              key={name}
              name={requiredItems[name].label}
              amount={requiredItems[name].amount}
              image={requiredItems[name].image}
              redText={
                plyInventory[name]
                  ? requiredItems[name].amount > plyInventory[name]
                  : true
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default SummaryCosts;
