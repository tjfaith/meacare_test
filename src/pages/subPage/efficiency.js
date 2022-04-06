// Icon
import { ReactComponent as SearchleIcon } from "../../images/icons/search.svg";

// mui component
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// components
import Graph from "../../components/graphlayout";

const Efficiency = () => {
    const [options, setOptions] = useState('');

  const filterChange = (event) => {
    setOptions(event.target.value);
  };
  return (
      <div>
    {/* header part */}
    <div className="flex flex-wrap items-center justify-between px-8 py-5">
      <h3>Efficiency Analytics</h3>
      <div className="border flex flex-wrap w-5/12 rounded-lg bg-lightergray">
        <div class="flex -mr-px">
          <span class="bg-lightergray rounded-lg flex items-center leading-normal   border-0 px-3 text-gray-600">
            <SearchleIcon />
          </span>
        </div>
        <input
          type="text"
          class="flex-shrink flex-grow flex-auto  w-px flex-1 border-0 h-10 px-3 not-italic  self-center rounded-lg  bg-lightergray outline-none"
          placeholder="Search"
        />
      </div>    
      <FormControl className="border  w-40" size='small' margin='dense' >
        <InputLabel  id="demo-simple-select-label">Filter Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={options}
          label="Filter Options"
          onChange={filterChange}
          className=""
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    <button className="bg-green-600 font-semibold text-white py-2 px-4 rounded-lg">Export</button>
    </div>

    {/* body part */}
    <Graph/>
    </div>
  );
};

export default Efficiency;

