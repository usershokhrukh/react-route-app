import React, {useState} from "react";

const History = (data) => {
  const [historyData, setData] = useState((JSON.parse(localStorage.getItem("color"))).text);
  
  return (
    <div className="history">
      <div className="history__item">
        <p className="history__text">{historyData}</p>
      </div>
    </div>
  );
};

export default History;
