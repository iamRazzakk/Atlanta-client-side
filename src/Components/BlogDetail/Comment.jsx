import { useQuery } from "@tanstack/react-query";
import Loading from "../Share/Loading";
import { useParams } from "react-router-dom";

const Comment = () => {
    const { id } = useParams();
    console.log(id);

    const { isPending, data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
            fetch('http://localhost:5000/comments').then((res) =>
                res.json(),
            ),
    });

    let commentFilter = [];

    if (comments && comments.length > 0) {
        commentFilter = comments.filter(comment => comment.blogId === id);
    }

    if (isPending) {
        return <Loading></Loading>;
    }

    return (
        <div>
            {
                commentFilter?.map(comment => (
                    <div key={comment._id}>
                        <h1>{comment?.name}</h1>
                        <h1>{comment?.comment}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Comment;