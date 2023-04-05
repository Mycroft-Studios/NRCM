import ItemGrid from "../ItemGrid/ItemGrid";
import SummaryContainer from "../SummaryContainer/SummaryContainer";
import "./ItemContainer.css";

const ItemContainer = () => {
  return (
    <div className="item-container">
      <ItemGrid />
      <SummaryContainer />
    </div>
  );
};

export default ItemContainer;
