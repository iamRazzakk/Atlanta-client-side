import { useQuery } from "@tanstack/react-query";


const Comment = () => {
    const { data: comments } = useQuery('comments', () => {
        return fetch("http://localhost:5000/comments")
            .then((res) => res.json());
    });
    return (
        <div>
            {
                comments?.map(comment => <h1 key={comment._id}>{comment?.name}</h1> )
            }
        </div>
    );
};

export default Comment;