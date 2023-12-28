import React, { useState } from 'react'
import  Card  from '../UI/Card';
import CostFilter from './CostFilter';
import CostsList from './CostsList';
import CostsDiagram from './CostsDiagram';

import './Costs.css';

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  })

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs