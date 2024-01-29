
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import { AuthContext } from "../UsersRegisterAndLogin/AuthProvider";

const BlogDetail = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Error:', error));

        // fetch('http://localhost:5000/comments')
        //     .then(response => response.json())
        //     .then(data => setComments(data))
        //     .catch(error => console.error('Error:', error));
    }, [id]);

    
    return (
        <div>
            <div className="md:mt-10 space-y-6">
                <h1 className="text-4xl font-bold font-Bricolage">{blog?.name}</h1>
                <p className="text-xl font-Lato">{blog?.details}</p>
                <img src={blog?.data?.data.display_url} alt="" />
            </div>
            
            <div>
                
                <Comment />
            </div>
        </div>
    );
};

export default BlogDetail;
