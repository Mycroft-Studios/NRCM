import React, {Context, createContext, useContext, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import { CraftableItem } from "../typings/Items";
import Labels from "../typings/Labels";
import ShopData from "../typings/ShopData";

interface ShopDataValues {
    items: CraftableItem[];
    setItems: (items: React.SetStateAction<CraftableItem[]>) => void;
    labels: Labels;
}

const ShopDataCtx = createContext<ShopDataValues | null>(null);

const ShopDataProvider = ({children}: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CraftableItem[]>([]);
    const [labels, setLabels] = useState<Labels>({});

    useNuiEvent<ShopData>("setShopData", (data) => {
        setItems(data.shop.items);
        setLabels(data.shop.labels);
      });

    return (
        <ShopDataCtx.Provider value={{items, labels, setItems}}>
            {children}
        </ShopDataCtx.Provider>
    );
        
}

export default ShopDataProvider;

export const useShopData = () => { return useContext<ShopDataValues>(ShopDataCtx as Context<ShopDataValues>)};