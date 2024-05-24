import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const SortCard = ({ onSort }) => {
  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
      <div className="sort-card">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={handleSortChange}
          >
            <FormControlLabel value="Old to new" control={<Radio />} label="Old to new" />
            <FormControlLabel value="New to old" control={<Radio />} label="New to old" />
            <FormControlLabel value="Price high to low" control={<Radio />} label="Price high to low" />
            <FormControlLabel value="Price low to high" control={<Radio />} label="Price low to high" />
          </RadioGroup>
        </FormControl>
      </div>
  );
};

export default SortCard;
