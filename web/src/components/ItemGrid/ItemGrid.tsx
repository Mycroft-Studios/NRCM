import { CraftableItem, RequiredItem } from "../../typings/Items";
import { useSearch } from "../../providers/SearchProvider";
import { useShopData } from "../../providers/ShopDataProvider";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./ItemGrid.css";

const ItemGrid = () => {
  const {searchText} = useSearch();
  const {items, setItems} = useShopData();
  const filteredItems = items.filter((item: CraftableItem) => {
    let include = searchText === "";
    // If the item name (label) has the search text in it
    if (item.label.toLowerCase().includes(searchText)) {
      include = true;
    }
    // If any of the items requirements have the search text in the name (label)
    item.requiredItems.map((reqItem: RequiredItem) => {
      if (reqItem.label.toLowerCase().includes(searchText)) {
        include = true;
      }
    });
    // If either of the above are true, add this item to the filtered item list
    return include;
  });

  const itemAmountChangeHandler = (amountSelected: number, item: string) => {
    setItems((previousShopItems: CraftableItem[]) => {
      return previousShopItems.map((shopItem: CraftableItem) => {
        // if the item name matches the item we are updating
        if (shopItem.name === item) {
          // return a new object with the updated amount
          return {
            ...shopItem,
            amountSelected: Math.floor(amountSelected),
          };
        }
        // otherwise return the original item
        return shopItem;
      });
    })
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
