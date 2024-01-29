/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";


const SingleBlog = ({ blog }) => {
    const [isBookMark, setIsBookMark] = useState(false)
    // console.log(blog);
    const handleBookMark = () => {
        const isExistingBookMark = localStorage.getItem(blog._id)
        if (isExistingBookMark) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All ready Exist !",
            });
        } else {
            localStorage.setItem('post' && blog._id, JSON.stringify(blog))
            setIsBookMark(true);
            Swal.fire({
                title: "Good job!",
                text: "Add is localStorage!",
                icon: "success"
            });
        }
    }
    return (
        <div>
            {blog && blog.Category && blog.name && blog.details && blog.data?.data?.display_url ? (
                <div className="md:flex gap-4 mb-4 border-b p-4 border-gray-400">
                    <div className="flex-1 ">
                        <div className="flex justify-between ">
                            <div>
                                <Link to={`blog/${blog._id}`}>
                                    <p className="text-xl font-Bricolage font-bold hover:underline">#{blog.Category}</p>
                                    <h1 className="font-Bricolage text-3xl font-bold">{blog.name}</h1>
                                    <h3 className="font-Lato text-xl">{blog.details}</h3>
                                </Link>
                            </div>
                            <div >
                                <button onClick={handleBookMark} className="text-2xl">
                                    <FaBookmark></FaBookmark>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img className="h-[131px] flex justify-center items-center w-[211px]" src={blog.data.data.display_url} alt="" />
                    </div>
                </div>
            ) : (
                <h1 className="text-4xl text-center font-Bricolage text-black">No Blog found</h1>
            )}
        </div>
    );
};

export default SingleBlog;