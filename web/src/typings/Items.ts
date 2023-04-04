export interface RequiredItem {
    name: string;
    label: string;
    amount: number;
    image: string;
}

export interface CraftableItem {
    name: string;
    image: string;
    label: string;
    requiredItems: RequiredItem[];
    amountSelected?: number;
}