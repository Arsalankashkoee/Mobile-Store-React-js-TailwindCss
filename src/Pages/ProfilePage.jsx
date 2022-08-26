import { useAuth } from "../Context/AuthProvider";

const ProfilePage = () => {
  const userData = useAuth();

  return (
    <section className="container">
      <div className="container bg-white rounded-lg shadow-lg ">
        <div className="py-7 flex flex-col gap-3">
          <h2 className="font-semibold text-lg border-b border-b-gray-300 pb-3">
            Profile
          </h2>
          <p className="">
            <span>Name :</span>
            <span className="ml-1">{userData.name}</span>
          </p>
          <p className="">
            <span>Phone Number :</span>
            <span className="ml-1">{userData.phoneNumber}</span>
          </p>
          <p className="">
            <span>Email :</span>
            <span className="ml-1">{userData.email}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
