import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import { InfoModal } from "../shared/InfoModal";

const JoinForm: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="md:6/12 shadow-3xl w-10/12 bg-white lg:w-5/12">
        <h2 className="text-center text-3xl">Speed Date App</h2>
        <form className="p-12 md:p-24">
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <PersonIcon className="absolute ml-3" />
            <input
              type="text"
              id="username"
              className="w-full bg-gray-100 py-2 pl-12 focus:outline-none md:py-4"
              placeholder="Username"
            />
          </div>
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <InfoIcon className="absolute ml-3" />
            <input
              type="text"
              className="w-full bg-gray-100 py-2 pl-12 focus:outline-none md:py-4"
              placeholder="Your contact fb link ig link phone"
            />
          </div>
          <button className="w-full bg-gradient-to-b from-blue-700 to-gray-900 p-2 font-medium uppercase text-white md:p-4">
            Join
          </button>
          <div className="mt-4">
            {/* TODO: Fix bug in modal render */}
          {/*   <InfoModal name="How this app work" header="Info about app">
              <div className="mt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  architecto recusandae ex consequuntur. A provident totam
                  expedita quis aliquam cumque!
                </p>
              </div>
            </InfoModal> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
