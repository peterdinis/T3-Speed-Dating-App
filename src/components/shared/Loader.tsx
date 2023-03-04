import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { api } from "~/utils/api";
const Loader: React.FC = () => {

  const {data} = api.users.findMatch.useQuery(userId);
  return (
    /* TODO: Update design later */
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
      <span>Wait for user</span>
    </Box>
  );
};

export default Loader;
