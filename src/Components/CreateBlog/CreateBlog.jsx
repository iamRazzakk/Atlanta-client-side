import axios from "axios";
// import useAxiosPublic from "../Hook/axiosPublic";
import toast, { Toaster } from "react-hot-toast";


const CreateBlog = () => {
    // const axiosPublic = useAxiosPublic()
    const IMG_API_KEY = '95e0e6f1790d5b0a2184be49e4a99407' //please don't use this api
    const handleAddCoffee = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const Category = form.Category.value;
        const details = form.details.value;
        console.log(name, Category, details);
        const image = form.image.files[0];
        const formData = new FormData()
        formData.append('image', image)
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`, formData);
        // console.log(data);
        const blogsData = {
            name: name,
            Category: Category,
            details: details,
            data: data,
        }
        axios.post('http://localhost:5000/blogs', blogsData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.data.acknowledged) {
                    toast.success('Blog added successfully');
                } else {
                    toast.error('Something is missing');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An error occurred while adding the Blog');
            });
    }
    return (
        <div className="bg-[#ffe945] p-24 font-Bricolage">
            <h1 className="text-3xl font-extrabold text-center">Add a Blog</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity name */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control py-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Blog Title</span>
                        </label>
                        <label className="input-group">
                            {/* <span>Name</span> */}
                            <input type="text" name="name" placeholder="Enter your Blog Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control py-6 md:w-1/2">
                        <label className="label-text font-bold">Category:</label>
                        <select name="Category" className="w-full rounded-md md:py-3  mx-auto text-black bg-white" id="Category">
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
                            <input type="file" name="image" placeholder="Enter your imgbb direct Photo URL" className="input input-bordered w-full" />
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
                            <textarea type="text" name="details" placeholder="Details" className="input w-full input-bordered" />
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
    );
};

export default CreateBlog;