import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { FilterType } from "../types/FilterType";

type FilterProps = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

function Filter({ filter, setFilter }: FilterProps) {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    value: FilterType | null,
  ) => {
    if (value !== null) {
      setFilter(value);
    }
  };

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={handleChange}
      size="small"
      sx={{
        bgcolor: "#f7f7f7",
        borderRadius: 2,
        "& .MuiToggleButton-root": {
          textTransform: "none",
          border: "none",
          px: 2,
        },
        "& .Mui-selected": {
          bgcolor: "#ffffff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        },
      }}>
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="active">Active</ToggleButton>
      <ToggleButton value="completed">Completed</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Filter;
