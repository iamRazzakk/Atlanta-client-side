import { useContext } from "react";
import { AuthContext } from "../UsersRegisterAndLogin/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="md:flex gap-6">
            <div className="flex-1">
                <img className="w-60 h-60 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <div className="flex-1">
                <h1>{user?.displayName}</h1>
                <h1>{user?.email}</h1>
            </div>
        </div>
    );
};

export default UserProfile;