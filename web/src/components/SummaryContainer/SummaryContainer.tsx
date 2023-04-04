import SummaryCosts from '../SummaryCosts/SummaryCosts';
import SummaryCrafting from '../SummaryCrafting/SummaryCrafting';
import './SummaryContainer.css';
import { CraftableItem } from '../../typings/Items';
import { InventoryItem } from '../../typings/Inventory';

interface SummaryContainerProps {
    items: CraftableItem[];
    plyInventory: InventoryItem;
}

const SummaryContainer = ({ items, plyInventory}: SummaryContainerProps) => {

    return (
        <div className="summary-container">
            <SummaryCosts items={items} plyInventory={plyInventory}/>
            <SummaryCrafting items={items}/>
        </div>
    )
}

export default SummaryContainer;
