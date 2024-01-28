import { useContext } from "react";
import { AuthContext } from "../UsersRegisterAndLogin/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from './../Hook/axiosPublic';


const MyPost = () => {
    // eslint-disable-next-line no-unused-vars
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: Blogs, refetch } = useQuery({
        queryKey: 'blogs',
        queryFn: () => {
            return fetch("http://localhost:5000/blogs")
                .then((res) => res.json());
        },
    });
    const userFilter = Blogs?.filter(blogs => blogs?.email === user?.email)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/blogs/${id}`)
                if (result.isConfirmed) {
                    axiosPublic.delete(`/blogs/${id}`)
                        .then(res => {
                            console.log(res);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Blog post has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            }
        });
    }
    const handleUpdate = (id) => {
        
    }
    return (
        <div>
            {userFilter && userFilter.length > 0 && (
                <table className="table">
                    <thead >
                        <tr>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            {/* Add more table headers as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {userFilter.map(blog => (
                            <tr key={blog._id}>
                                <td>{blog.name}</td>
                                <td>
                                    <Link to={'blogs'}>
                                        <button onClick={() => handleUpdate(blog._id)}>
                                            <FaRegEdit className="text-2xl"></FaRegEdit>
                                        </button>
                                    </Link>
                                </td>
                                <Link>
                                    <td>
                                        <button onClick={() => handleDelete(blog._id)}>
                                            <MdDelete className="text-2xl"></MdDelete>
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
            {userFilter && userFilter.length === 0 && <p>No blog posts found for the user.</p>}
        </div >
    );
};

export default MyPost;