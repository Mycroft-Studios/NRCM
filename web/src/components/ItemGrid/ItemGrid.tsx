import { CraftableItem, RequiredItem } from "../../typings/Items";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./ItemGrid.css";

interface ItemGridProps {
  items: CraftableItem[];
  currentSearch: string;
  onAmountUpdate: Function;
}

const ItemGrid = ({ items, currentSearch, onAmountUpdate }: ItemGridProps) => {
  const filteredItems = items.filter((item: CraftableItem) => {
    let include = currentSearch === "";
    // If the item name (label) has the search text in it
    if (item.label.toLowerCase().includes(currentSearch)) {
      include = true;
    }
    // If any of the items requirements have the search text in the name (label)
    item.requiredItems.map((reqItem: RequiredItem) => {
      if (reqItem.label.toLowerCase().includes(currentSearch)) {
        include = true;
      }
    });
    // If either of the above are true, add this item to the filtered item list
    return include;
  });

  const itemAmountChangeHandler = (value: number, name: string) => {
    onAmountUpdate(value, name);
  };

  return (
    <div className="item-grid">
      {filteredItems.map((item: CraftableItem) => {
        return (
          <RecipeCard
            key={item.name}
            item={item}
            onAmountChange={itemAmountChangeHandler}
          />
        );
      })}
    </div>
  );
};

export default ItemGrid;
