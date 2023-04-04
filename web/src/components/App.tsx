import { useEffect, useState } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import { useNuiEvent } from "../hooks/useNuiEvent";
import MenuHeader from "./MenuHeader/MenuHeader";
import ItemContainer from "./ItemContainer/ItemContainer";
import SearchBar from "./SearchBar/SearchBar";
import { isEnvBrowser } from "../utils/misc";
import { InventoryItem } from "../typings/Inventory";
import { CraftableItem } from "../typings/Items";
import DebugShop from "./DebugShop";

interface ItemsToCraft {
  name: string;
  amount: number;
}

interface ShopData {
  shop: {
    label: string;
    items: CraftableItem[];
  };
  plyInventory: InventoryItem;
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
  }
]);


const App = () => {
  const [shopItems, setShopItems] = useState<CraftableItem[]>([]);
  const [plyInventory, setPlyInventory] = useState<InventoryItem>({});
  const [label, setLabel] = useState<string>("Crafting");

  useEffect(() => {
    fetchNui("uiLoaded", {}, {})
  }, []);

  useNuiEvent<ShopData>("setShopData", (data) => {
    setShopItems(data.shop.items);
    setPlyInventory(data.plyInventory);
    setLabel(data.shop.label);
  });

  const submitText: string = "CRAFT";
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchUpdate = (str: string) => {
    setSearchText(str.toLowerCase());
  };

  const handleShopItemUpdate: Function = (amountSelected: number, item: string) => {
    // set shop items to a new array with the updated item
    setShopItems((previousShopItems: CraftableItem[]) => {
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
  }

  const handleSubmitClick = () => {
    const itemsToCraft: ItemsToCraft[] = [];
    shopItems.forEach((item: CraftableItem) => {
      if (item.amountSelected && item.amountSelected > 0) {
        item.amountSelected = 
        itemsToCraft.push({
          name: item.name,
          amount: item.amountSelected,
        });
      }
    });
    fetchNui("craftItems", itemsToCraft, {});
    fetchNui("closeCraftingMenu", null, {})
  }

  return (
    <div className="nui-wrapper" style={{backgroundColor: isEnvBrowser() ? 'grey' : undefined}}>
      <div className="main-container">
        <MenuHeader label={label} />
        <SearchBar onSearchUpdate={handleSearchUpdate} />
        <ItemContainer currentSearch={searchText} items={shopItems} plyInventory={plyInventory} onAmountUpdate={handleShopItemUpdate}/>
        <button className="submit-button" onClick={handleSubmitClick}>{submitText}</button>
      </div>
    </div>
  );
};

export default App;
