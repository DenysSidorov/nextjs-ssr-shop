import React from 'react';
import './index.scss';

interface OneGoodItemInListProps {
  good: {
    price: string;
  };
}

const OneGoodItemInList: React.FC<OneGoodItemInListProps> = ({ good }) => {
  return (
      <div className="oneGoodItemInList">{good.price}</div>
  );
}

export default OneGoodItemInList;
