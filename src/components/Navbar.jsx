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
      {/* <nav>
        <div className="welcome">
          <h4>Welcome</h4>
          <p>{formattedDate3} </p>
        </div>
        <div className="search">
          <SearchIcon className="Search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </nav> */}
      <Header />
    </>
  );
};

export default Navbar;
