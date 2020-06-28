import React, { useState, ChangeEvent } from 'react';
import OInput, { OInputProps } from './index';

export interface AutoCompleteProps extends Omit<OInputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[];
  onSelect?: (item: string) => void;
}

function AutoComplete(props: AutoCompleteProps) {
  const { fetchSuggestions, onSelect, value, ...restProps } = props;

  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);

    if (value) {
      const result = fetchSuggestions(value);
      setSuggestions(result);
    } else {
      setSuggestions([]);
    }
  };

  const handleClick = (item: string) => {
    setInputValue(item);
    setSuggestions([]);
    if (onSelect) {
      onSelect(item);
    }
  };

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map(item => {
          return (
            <li key={item} onClick={() => handleClick(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <OInput value={inputValue} onChange={handleChange} {...restProps} />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
}

export default AutoComplete;
