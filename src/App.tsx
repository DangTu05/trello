import { Button } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function SelectSmall() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const modeChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as "light" | "dark" | "system" | null);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={modeChange}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}
function App() {
  return (
    <>
      <SelectSmall />
      <div> Đặng Tú</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon />
    </>
  );
}

export default App;
