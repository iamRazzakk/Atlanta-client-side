import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import { AuthContext } from "../UsersRegisterAndLogin/AuthProvider";

const BlogDetail = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [blog, setBlog] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Error fetching blog details:', error));
    }, [id]);

    const handleSubmitComment = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const comment = form.comment.value;
        const userId = parseInt(id);
        const blogId = blog._id;
        const commentData = {
            name: name,
            email: user?.email,
            comment: comment,
            userId: userId,
            blogId: blogId,
        }

        axios.post('http://localhost:5000/comments', commentData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.data.acknowledged) {
                    toast.success('Comment added successfully');
                } else {
                    toast.error('Something is missing');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An error occurred while adding the Comment');
            });
    }

    return (
        <div>
            <div className="md:mt-10 space-y-6">
                <h1 className="text-4xl font-bold font-Bricolage">{blog?.name}</h1>
                <p className="text-xl font-Lato">{blog?.details}</p>
                <img src={blog?.data?.data.display_url} alt="" />
            </div>
            <form onSubmit={handleSubmitComment} className="md:mt-20">
                <input type="text" name="name" placeholder="Enter your name" className="input md:mb-6 border border-black input-ghost w-full max-w-xs" /><br />
                <textarea className="textarea border border-black textarea-bordered" cols="50" rows="10" name="comment" placeholder="Enter your comment"></textarea><br />
                <button className="bg-[#f33151] px-6 py-4 rounded-full text-white font-bold hover:bg-[#e1404a]">Submit</button>
            </form>
            <div>
                <h1>Comment:</h1>
                <Comment></Comment>
            </div>
        </div>
    );
};

export default BlogDetail;
