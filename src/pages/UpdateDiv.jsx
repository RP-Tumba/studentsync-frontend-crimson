import "../style/UpdateStudent.css";
import { useEffect } from "react";
import useStudentStore from "../store/studentStore";
import man from "../assets/man.png";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";

const UpdateDiv = () => {
  // eslint-disable-next-line no-unused-vars
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="Container-edit">
        {/* <div className="green"></div> */}
        <div className="Details">
          <div className="avatar">
            <div>
              <img className="image" src={man} />
              <FlipCameraIosIcon className="Camera" />
            </div>
            <div>
              <p>
                {" "}
                <b> Student Name</b>
              </p>
              <p className="email">Studentemail@gmail.com</p>
            </div>
          </div>

          <div>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
        <div className="Form">
          <form method="post">
            <div className="allInput">
              <div className="right">
                <label>First Name</label> <br />
                <input type="text" placeholder="  First Name" />
                <br />
                <label>Student id</label>
                <br />
                <input type="text" placeholder="   Student id" />
                <br />
                <label>Date of Birth</label> <br />
                <input type="text" placeholder="   Date of birth" />
                <br />
                <label>Enrollment Date</label>
                <br />
                <input type="text" placeholder="   Enrollment Date" />
              </div>

              <div className="left">
                <label>Last Name</label> <br />
                <input type="text" placeholder="   Last Name" />
                <br />
                <label>Email</label>
                <br />
                <input type="Email" placeholder="   Email" />
                <br />
                <label>Contact Number</label>
                <br />
                <input type="text" placeholder="    +250 784 439 432" />
              </div>
            </div>
          </form>
        </div>

        <div className="lastItems">
          <div className="avatar">
            <div className="ovalEmail">
              <EmailIcon className="EmailCloro" />
            </div>
            <div>
              <p>
                <b> Studentemail@gmail.com</b>
              </p>
              <p className="#">1 month ago</p>
            </div>
          </div>
          <button className="lastButton">
            <ArrowBackIcon /> Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateDiv;
