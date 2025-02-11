import "../styles/LocationSearch.css";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Select from "react-select";
import api from "../api/apiClient";

function LocationSearch({ resultSearch }) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [menuIsOpenValue, setMenuIsOpenValue] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const cityLocation = async (value) => {
    try {
      const cities = await api.getCity(value);
      const newOptions = await cities.map((item) => ({
        value: item,
        label: `${item.name} ${item.state} ${item.country}`,
      }));
      setOptions(newOptions);
      options.length > 0 ? menu(true) : menu(false);
    } catch (error) {
      alert(error);
    }
  };

  const menu = (validation) => {
    validation ? setMenuIsOpenValue(true) : setMenuIsOpenValue(false);
  };

  const clickSearch = async () => {
    if (value.trim() !== "") {
      await cityLocation(value);
      menu(true);
    }
  };

  const getValueInput = (item) => {
    if (item.trim() === "") {
      return;
    }
    setValue(item);
  };

  const getSelect = (item) => {
    setSelectValue(item);
    menu(false);
  };

  const customStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      boxShadow: "none",
      border: "none",
      minHeight: "unset",
    }),
    dropdownIndicator: () => ({ display: "none" }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  useEffect(() => {
    resultSearch(selectValue);
  }, [selectValue]);

  return (
    <header className="location-search">
      <div className="logo">Clima Estudo</div>
      <Select
        value={selectValue}
        className="my-select"
        classNamePrefix="select"
        onInputChange={getValueInput}
        onChange={getSelect}
        options={options}
        styles={customStyles}
        menuIsOpen={menuIsOpenValue}
      />
      <IoSearch size={29} onClick={clickSearch} />
    </header>
  );
}

export default LocationSearch;
