import { CraftableItem } from "./Items";
import InventoryItem from "./Inventory";
import Labels from "./Labels";

export default interface ShopData {
    shop: {
      items: CraftableItem[];
      labels: Labels;
    };
    plyInventory: InventoryItem;
  }