import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader: React.FC = () => {
  return (
    /* TODO: Update design later */
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
      <span>Wait for user</span>
    </Box>
  );
};

export default Loader;
