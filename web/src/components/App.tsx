import { useEffect, useState } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import MenuHeader from "./MenuHeader/MenuHeader";
import ItemContainer from "./ItemContainer/ItemContainer";
import SearchBar from "./SearchBar/SearchBar";
import { isEnvBrowser } from "../utils/misc";
import { CraftableItem } from "../typings/Items";
import DebugShop from "./DebugShop";
import InventoryProvider from "../providers/InventoryProvider";
import SearchProvider from "../providers/SearchProvider";
import { useShopData } from "../providers/ShopDataProvider";

interface ItemsToCraft {
  name: string;
  amount: number;
}

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

debugData([
  {
    action: "setShopData",
    data: DebugShop(),
  },
]);

const App = () => {
  const [shopItems] = useState<CraftableItem[]>([]);

  const { labels } = useShopData();

  useEffect(() => {
    fetchNui("uiLoaded", {}, {});
  }, []);

  const handleSubmitClick = () => {
    const itemsToCraft: ItemsToCraft[] = [];
    shopItems.forEach((item: CraftableItem) => {
      if (item.amountSelected && item.amountSelected > 0) {
        item.amountSelected = itemsToCraft.push({
          name: item.name,
          amount: item.amountSelected,
        });
      }
    });
    fetchNui("craftItems", itemsToCraft, {});
    fetchNui("closeCraftingMenu", null, {});
  };

  return (
    <div
      className="nui-wrapper"
      style={{ backgroundColor: isEnvBrowser() ? "grey" : undefined }}
    >
      <div className="main-container">
        <MenuHeader />
        <SearchProvider>
          <SearchBar />
          <InventoryProvider>
            <ItemContainer />
          </InventoryProvider>
        </SearchProvider>
        <button className="submit-button" onClick={handleSubmitClick}>
          {labels.submit || "Craft"}
        </button>
      </div>
    </div>
  );
};

export default App;
