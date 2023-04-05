import React, {Context, createContext, useContext, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import InventoryItem from "../typings/Inventory";
import ShopData from "../typings/ShopData";

const InventoryCtx = createContext<InventoryItem | null>(null);

const InventoryProvider = ({children}: { children: React.ReactNode }) => {

    const [plyInventory, setPlyInventory] = useState<InventoryItem>({});

    useNuiEvent<ShopData>("setShopData", (data) => {
        setPlyInventory(data.plyInventory);
    });

    return (
        <InventoryCtx.Provider value={plyInventory}>
            {children}
        </InventoryCtx.Provider>
    );
};

export default InventoryProvider;

export const useInventory = () => { return useContext<InventoryItem>(InventoryCtx as Context<InventoryItem>)};