import SearchIcon from "@mui/icons-material/Search";
import Header from '../components/responsiveness/Header'

const Navbar = () => {
  const currentDate = new Date();

  const formattedDate3 = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
    </>
  );
};

export default Navbar;
