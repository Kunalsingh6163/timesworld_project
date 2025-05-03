import { SlSocialGoogle, SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 text-2xl text-gray-600 mt-14 ">
        {[SlSocialGoogle, SlSocialFacebook, LuLinkedin, FiTwitter].map(
          (Icon, idx) => (
            <div
              key={idx}
              className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center"
            >
              <Icon className="cursor-pointer hover:text-blue-600" />
            </div>
          )
        )}
      </div>
      <div className="flex flex-col items-center justify-center font-bold text-[13px] mt-5 text-[#3d3d3d]">
        <p>example@gmail.com</p>
        <p className="flex flex-row items-start gap-1">
          Copyright
          <BiCopyright style={{ marginTop: "5px" }} /> 2020 Name. All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
