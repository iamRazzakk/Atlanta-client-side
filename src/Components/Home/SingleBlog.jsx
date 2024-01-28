/* eslint-disable react/prop-types */


const SingleBlog = ({ blog }) => {
    // console.log(blog);
    return (
        <div>
            {blog && blog.Category && blog.name && blog.details && blog.data?.data?.display_url ? (
                <div className="md:flex gap-4">
                    <div className="flex-1">
                        <p className="text-xl font-Bricolage font-bold hover:underline">#{blog.Category}</p>
                        <h1 className="font-Bricolage text-3xl font-bold">{blog.name}</h1>
                        <h3 className="font-Lato text-xl">{blog.details}</h3>
                    </div>
                    <div className="">
                        <img className="h-[131px] w-[211px]" src={blog.data.data.display_url} alt="" />
                    </div>
                </div>
            ) : (
                <h1 className="text-4xl text-center font-Bricolage text-black">No Blog found</h1>
            )}
        </div>
    );
};

export default SingleBlog;