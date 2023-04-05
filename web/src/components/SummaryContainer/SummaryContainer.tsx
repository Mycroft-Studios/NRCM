import SummaryCosts from "../SummaryCosts/SummaryCosts";
import SummaryCrafting from "../SummaryCrafting/SummaryCrafting";
import "./SummaryContainer.css";

const SummaryContainer = () => {
  return (
    <div className="summary-container">
      <SummaryCosts />
      <SummaryCrafting />
    </div>
  );
};

export default SummaryContainer;
