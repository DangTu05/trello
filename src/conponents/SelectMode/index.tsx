import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function SelectMode() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const modeChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as "light" | "dark" | "system" | null);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        sx={{
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
        id="demo-select-small-label"
      >
        Mode
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={modeChange}
        sx={{
          color: "white",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}
export default SelectMode;
