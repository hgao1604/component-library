import { Input, BaseInputProps } from "../Input/Input";
import React, { useState, useEffect, useRef } from "react";
import Icon from "../Icon/Icon";
import useDebounce from "../../hooks/useDebounce";
import { twMerge } from "tailwind-merge";
import useClickOutside from "../../hooks/useClickOutSide";

interface DataSourceObject {
  value: string;
}

//export type DataSourceType<T = {}> = T & DataSourceObject;

export type DataSourceType<T = Record<string, never>> = T & DataSourceObject;

export interface AutoCompleteProps<T = Record<string, never>>
  extends Omit<BaseInputProps, "onSelect"> {
  /**
   * A function that takes a string as input and returns an array of suggestions.
   * @param {string} str - The current value of the input field.
   * @return {DataSourceType[] | Promise<DataSourceType[]>}
   * */
  fetchSuggestions: (
    str: string
  ) => DataSourceType<T>[] | Promise<DataSourceType<T>[]>;
  /**
   * The callback when a suggestion is selected
   * */
  onSelect?: (item: DataSourceType) => void;
  /**
   * Custom render function
   * */
  // renderOption?: (item: DataSourceType) => React.ReactElement;
  renderOption?: (item: DataSourceType<T>) => React.ReactElement;
}

/**
 * React functional component that implements an autocomplete feature.
 *
 * @param {AutoCompleteProps} props - The props object that contains the following properties:
 *   - fetchSuggestions: A function that takes a string as input and returns an array of suggestions.
 *   - value: The current value of the input field.
 *   - onSelect: A function that is called when a suggestion is selected.
 *   - renderOption: A function that takes a suggestion item and returns the JSX to render.
 *   - ...rest: Additional props passed to the component.
 * @return {ReactElement} The rendered autocomplete component.
 */
export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, value, onSelect, renderOption, ...rest } = props;
  const [inputValue, setInputValue] = useState((value as string) || "");
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceValue = useDebounce(inputValue, 500);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const results = fetchSuggestions(debounceValue);
      if (results instanceof Promise) {
        console.log("triggered");
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
    setHighlightIndex(-1);
  }, [debounceValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const handleClick = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
    triggerSearch.current = false;
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case "Enter":
        if (suggestions[highlightIndex]) {
          handleClick(suggestions[highlightIndex]);
        }
        break;
      case "ArrowUp":
        highlight(highlightIndex - 1);
        break;
      case "ArrowDown":
        highlight(highlightIndex + 1);
        break;
      case "Escape":
        setSuggestions([]);
        break;
      default:
        break;
    }
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : <div>item</div>;
  };

  if ("value" in props) {
    delete rest.defaultValue;
  }

  return (
    <div ref={componentRef}>
      <Input
        value={inputValue}
        {...rest}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {loading && (
        <div>
          <Icon icon="spinner" spin></Icon>
        </div>
      )}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
              className={twMerge(
                index === highlightIndex ? "bg-slate-200" : ""
              )}
            >
              {renderTemplate(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
