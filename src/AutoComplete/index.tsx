import React, {useState, ChangeEvent} from 'react';
import classnames from 'classnames';

import "./index.less"

interface AutoCompleteProps {
  value?: string;
  fetchData: (str: string) => string[];
  onSelect?: (item: string) => void;

}

const AutoComplete:React.FC<AutoCompleteProps> = props  => {

  const {value, fetchData, onSelect, ...resetProps} = props

  const [data, setData] = useState<string[]>([])
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()
    setInputValue(value)

    if (value) {
      const res = fetchData(value)
      setData(res)
    }
  }

  const handleClick = (item:string) => {
    setInputValue(item)
    setData([]);

    if (onSelect) {
      onSelect(item)
    }
  }

  const generateDropdown = () => {
    return (
      <ul>
        {
          data.map(item => {
            return (
              <li key={item} onClick={() => handleClick(item)}>
                {item}
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <>
      <input defaultValue={inputValue || ''} onChange={handleChange} {...resetProps}></input>
      {
        data.length > 0 && generateDropdown()
      }
    </>
  )
}

export default AutoComplete
