import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2020, 3, 12),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 2, 7),
    description: "Computer",
    amount: 1999.99,
  },
  {
    id: 'c3',
    date: new Date(2021, 10, 10),
    description: "Microwave oven",
    amount: 599.99,
  },
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  
  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }


  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
