import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hook/axiosPublic";
import Navbar from "../Home/Navbar";


const UpdateData = () => {
    const { id } = useParams()
    console.log(id);
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        name: "",
        Category: "design",
        image: "",
        details: "",
    });

    useEffect(() => {
        const fetchData = () => {
            axiosPublic
                .get(`/blogs/${id}`)
                .then((response) => {
                    const blogData = response.data;
                    setFormData({
                        name: blogData.name,
                        Category: blogData.Category,
                        image: "",
                        details: blogData.details,
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        fetchData();
    }, [id, axiosPublic]);

    const handleUpdateBlog = (e) => {
        e.preventDefault();
        axiosPublic
            .put(`/blogs/${id}`, formData)
            .then((response) => {
                console.log(response.data);
                // Optionally, you can add a success message using toast or alert
            })
            .catch((error) => {
                console.error(error);
                // Handle error, show an error message using toast or alert
            });
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#ffe945] p-24 font-Bricolage rounded-lg">
                <h1 className="text-3xl font-extrabold text-center">Update Blog</h1>
                <form onSubmit={handleUpdateBlog}>
                    {/* form name and quantity name */}
                    <div className="md:flex gap-4 mb-8">
                        <div className="form-control py-2 md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Blog Title</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" name="name" defaultValue={formData?.name} placeholder="Enter your Blog Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control py-6 md:w-1/2">
                            <label className="label-text font-bold">Category:</label>
                            <select name="Category" defaultValue={formData?.Category} className="w-full rounded-md md:py-3  mx-auto text-black bg-white" id="Category">
                                <option value="innovation">innovation</option>
                                <option value="design" selected>design</option>
                                <option value="lifestyle" >lifestyle</option>
                                <option value="creative" >creative</option>
                                <option value="technology" >technology</option>
                                <option value="inspiration" >inspiration</option>
                            </select>
                        </div>
                    </div>
                    {/*  */}
                    <div className="w-full mb-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input-group text-center">
                                {/* <span>Name</span> */}
                                <input type="file" name="image" defaultValue={formData?.image} placeholder="Enter your imgbb direct Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="mb-8">
                        <div className="form-control md:w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Details</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <textarea type="text" name="details" defaultValue={formData?.details} placeholder="Details" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>

                    <button className="relative flex items-center justify-center w-full px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-black">Add Car Detail</span>
                        <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                    </button>

                    <Toaster></Toaster>
                    {/* <input type="submit" value="Add Car Detail" className="btn btn-block" /> */}
                </form>
            </div>
        </div>
    );
};

export default UpdateData;