import { useQuery } from "@tanstack/react-query";
import Loading from "../Share/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../UsersRegisterAndLogin/AuthProvider";
import Swal from "sweetalert2";

const Comment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    // console.log(id);

    const { isPending, data: fetchedComments, refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: () => fetch('http://localhost:5000/comments').then((res) => res.json()),
    });

    let commentFilter = [];

    if (fetchedComments && fetchedComments.length > 0) {
        commentFilter = fetchedComments.filter(comment => comment.blogId === id);
    }

    if (isPending) {
        return <Loading></Loading>;
    }
    const handleSubmitComment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const commentText = form.comment.value;
        const userId = parseInt(id);
        const blogId = id;

        const commentData = {
            name: name,
            email: user?.email,
            comment: commentText,
            userId: userId,
            blogId: blogId,
        };

        try {
            const response = await axios.post('http://localhost:5000/comments', commentData);

            if (response.data.acknowledged) {
                Swal.fire({
                    title: "Good job!",
                    text: "Comment added successfully!",
                    icon: "success"
                });
                // Let useQuery handle the refetching
                refetch();
            } else {
                toast.error('Something is missing');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Comment not added');
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmitComment} className="md:mt-20">
                <input type="text" name="name" placeholder="Enter your name" className="input md:mb-6 border border-black input-ghost w-full max-w-xs" /><br />
                <textarea className="textarea border border-black textarea-bordered" cols="50" rows="10" name="comment" placeholder="Enter your comment"></textarea><br />
                <button className="bg-[#f33151] px-6 py-4 rounded-full text-white font-bold hover:bg-[#e1404a]">Submit</button>
            </form>
            <h1 className="text-2xl font-bold">Comment:</h1>
            {
                commentFilter?.map(comment => (
                    <div key={comment._id} className="border-b border-gray-500">
                        {/* <h1 className="">{comment?.name}</h1> */}

                        <h1 className=""><span className="text-xl">{comment.name}:</span> {comment?.comment}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Comment;