import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZoneOne from "../../../assets/qZone1.png";
import qZoneTwo from "../../../assets/qZone2.png";
import qZoneThree from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub /> GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a
          href=""
          className="flex items-center gap-2 p-4 text-lg border rounded-t-lg"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href=""
          className="flex items-center gap-2 p-4 text-lg border border-y-0"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href=""
          className="flex items-center gap-2 p-4 text-lg border rounded-b-lg"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZoneOne} alt="" />
        <img src={qZoneTwo} alt="" />
        <img src={qZoneThree} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
