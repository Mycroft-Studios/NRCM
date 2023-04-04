import React from 'react';
import './RecipeCard.css';
import { CraftableItem, RequiredItem } from '../../typings/Items';
import RequiredItemCard from '../RequiredItem/RequiredItemCard';
import { useConfig } from '../../providers/ConfigProvider';

interface RecipeCardProps {
    item: CraftableItem;
    onAmountChange: Function;
}

const RecipeCard = ({item, onAmountChange}: RecipeCardProps) => {

    const {config} = useConfig();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onAmountChange(e.target.value, item.name)
    }

    const maxLength = 12
    const imageName = item.label.length >= maxLength ? item.label.substring(0, maxLength - 3) + "..." : item.label

    const craftingAmount = item.amountSelected || 0
    return (
        <div className="recipe-card">
            <div className="recipe-image-container">
                <p className="recipe-name">{imageName}</p>
                <img className="recipe-image" src={config.imagePath + item.image} alt="Image of craftable item"/>
            </div>
            <div className="recipe-crafting-container">
                <div className="recipe-crafting-amount-container">
                    <input className="amount-input-style" type="number" id="quantity" name={item.label} min="0" value={craftingAmount} onChange={handleChange}/>
                </div>
                <div className="required-items-container">
                    {item.requiredItems.map((requiredItem: RequiredItem, index:number) => {
                        let requiredItemTotal = (requiredItem.amount * Number(craftingAmount))
                        return (
                            <RequiredItemCard
                                key={index}
                                item={requiredItem.label}
                                itemImage={requiredItem.image} 
                                amountNeeded={requiredItemTotal}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecipeCard