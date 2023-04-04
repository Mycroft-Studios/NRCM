import ItemGrid from '../ItemGrid/ItemGrid';
import SummaryContainer from '../SummaryContainer/SummaryContainer';
import './ItemContainer.css';
import { CraftableItem } from '../../typings/Items';
import { InventoryItem } from '../../typings/Inventory';

interface ItemContainerProps {
    items: CraftableItem[];
    plyInventory: InventoryItem;
    currentSearch: string;
    onAmountUpdate: Function;
}

const ItemContainer = ({ items,  plyInventory, currentSearch, onAmountUpdate}: ItemContainerProps) => {
    
    return (
        <div className="item-container">
            <ItemGrid items={items} currentSearch={currentSearch} onAmountUpdate={onAmountUpdate}/> 
            <SummaryContainer plyInventory={plyInventory} items={items}/>
        </div>
    )
}

export default ItemContainer;