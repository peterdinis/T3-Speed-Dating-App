import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import { useForm } from "react-hook-form";
import { IJoinProps } from "~/interfaces/IJoin";
import { api } from "~/utils/api";
import {useRouter} from "next/router"

const JoinForm: React.FC = () => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm<IJoinProps>();
  
  const mutation = api.users.userCreate.useMutation();

  const onSubmit = (data: IJoinProps) => {
    mutation.mutate(data);
    router.push("/wait");
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="md:6/12 shadow-3xl w-10/12 bg-white lg:w-5/12">
        <h2 className="text-center text-3xl">Speed Date App</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-12 md:p-24">
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <PersonIcon className="absolute ml-3" />
            <input
              type="text"
              id="username"
              {...register("username", {
                required: true,
              })}
              onKeyUp={() => {
                trigger("username");
              }}
              className="w-full bg-gray-100 py-2 pl-12 focus:outline-none md:py-4"
              placeholder="Username"
            />
            {errors.username && errors.username.type === "required" && (
              <p className="text-red-800">Username is required</p>
            )}
          </div>
          <div className="mb-6 flex items-center text-lg md:mb-8">
            <InfoIcon className="absolute ml-3" />
            <input
              type="text"
              className="w-full bg-gray-100 py-2 pl-12 focus:outline-none md:py-4"
              placeholder="Your contact fb link ig link phone"
              {...register("contact", {
                required: true,
              })}
              onKeyUp={() => {
                trigger("contact");
              }}
            />

            {errors.contact && errors.contact.type === "required" && (
              <p className="text-red-800">Contact is required</p>
            )}
          </div>
          <button className="w-full bg-gradient-to-b from-blue-700 to-gray-900 p-2 font-medium uppercase text-white md:p-4">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
