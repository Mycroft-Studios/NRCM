import './RequiredItemCard.css'
import { useConfig } from '../../providers/ConfigProvider';

interface RequiredItemProps {
    item: any
    itemImage: string
    amountNeeded: number
}

const RequiredItemCard = ({item, itemImage, amountNeeded}: RequiredItemProps) => {

    const {config} = useConfig();

    return (
        <div className="required-item">
            <img src={config.imagePath + itemImage} alt="Test Item" className='required-item-image'/>
            <p className="required-item-text">{item} x{amountNeeded}</p>
        </div>
    )
}

export default RequiredItemCard