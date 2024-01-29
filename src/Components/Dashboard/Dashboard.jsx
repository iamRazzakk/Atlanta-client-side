import { NavLink, Outlet } from "react-router-dom";
import Navbar from './../Home/Navbar';


const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-black font-Bricolage flex md:mt-10 max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 md:min-h-[80vh] bg-[#FFC300]">
                    <ul className="menu md:p-6  md:text-xl">
                        <li className="md:mb-4"><NavLink to='dashboard/profile'>My Profile</NavLink></li>
                        <li><NavLink to='dashboard/my-post'>My Post</NavLink></li>
                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;