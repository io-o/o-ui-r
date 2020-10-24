import React, { useEffect, useState } from 'react';
import './index.less';

interface NavProps {
  activeIndex: number;
  list: any[];
}

const Nav: React.FC<NavProps> = props => {
  const { activeIndex, list } = props;

  const [aIndex, setaIndex] = useState(activeIndex);

  const handleClick = (index: number) => {
    setaIndex(index);
  };

  return (
    <>
      <div className="nav">
        <div className="nav-wrap">
          {list.map((item, index) => {
            return (
              <div
                onClick={() => handleClick(index)}
                className={`nav-wrap__item ${
                  index === aIndex ? 'isChecked' : null
                }`}
                key={index}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
