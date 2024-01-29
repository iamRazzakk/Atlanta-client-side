import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SingleBlog from "./SingleBlog";


const ForShowBlogs = () => {
    const [activeTab, setActiveTab] = useState('innovation');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const { data: Blogs } = useQuery({
        queryKey: 'blogs',
        queryFn: () => {
            return fetch("https://atlanta-ten.vercel.app/blogs")
                .then((res) => res.json());
        },
    });
    console.log(Blogs);
    const isInnovation = Blogs?.filter(blogs => blogs?.Category === "innovation")
    const isDesign = Blogs?.filter(blogs => blogs?.Category === "design")
    const isLifestyle = Blogs?.filter(blogs => blogs.Category === "lifestyle")
    const isCreative = Blogs?.filter(blogs => blogs.Category === "creative")
    const isTechnology = Blogs?.filter(blogs => blogs.Category === "technology")
    const isInspiration = Blogs?.filter(blogs => blogs.Category === "inspiration")
    console.log(isTechnology);
    return (
        <div className="md:mt-32">
            <div role="tablist" className="flex overflow-auto justify-end tabs tabs-lifted">
                <a onClick={() => handleTabClick("innovation")} role="tab" className={`tab ${activeTab === 'innovation' ? 'active [--tab-bg:black] [--tab-border-color:black] text-black text-xl font-bold hover:underline' : ''}`}>Innovation</a>
                <a onClick={() => handleTabClick("design")} role="tab" className={`tab ${activeTab === 'design' ? 'active [--tab-bg:black] [--tab-border-color:black] text-black text-xl font-bold hover:underline' : ''}`}>design</a>
                <a onClick={() => handleTabClick("lifestyle")} role="tab" className={`tab ${activeTab === 'lifestyle' ? 'active [--tab-bg:black] [--tab-border-color:black] text-black text-xl font-bold hover:underline' : ''}`}>lifestyle</a>
                <a onClick={() => handleTabClick("creative")} role="tab" className={`tab ${activeTab === 'creative' ? 'active [--tab-bg:black] [--tab-border-color:black] text-black text-xl font-bold hover:underline' : ''}`}>creative</a>
                <a onClick={() => handleTabClick("technology")} role="tab" className={`tab ${activeTab === 'technology' ? 'active [--tab-bg:black] [--tab-border-color:black] text-black text-xl font-bold hover:underline' : ''}`}>technology</a>
                <a onClick={() => handleTabClick("inspiration")} role="tab" className={`tab ${activeTab === 'inspiration' ? 'active [--tab-bg:black] [--tab-border-color:black] text-black text-xl font-bold hover:underline' : ''}`}>inspiration</a>
            </div>


            {/* For innovation */}
            {
                activeTab === "innovation" && <div className=' mt-[46px] '>
                    <div className=''>
                        {isInnovation && isInnovation.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)}
                    </div>
                </div>
            }
            {/* For  design*/}
            {
                activeTab === "design" && <div className=' mt-[46px] '>
                    <div className=''>
                        {isDesign && isDesign.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)}
                    </div>
                </div>
            }
            {/* For  lifestyle*/}
            {
                activeTab === "lifestyle" && <div className=' mt-[46px] '>
                    <div className=''>
                        {isLifestyle && isLifestyle.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)}
                    </div>
                </div>
            }
            {/* for  creative*/}
            {
                activeTab === "creative" && <div className=' mt-[46px] '>
                    <div className=''>
                        {isCreative && isCreative.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)}
                    </div>
                </div>
            }
            {/* for  technology*/}
            {
                activeTab === "technology" && <div className=' mt-[46px] '>
                    <div className=''>
                        {isTechnology && isTechnology.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)}
                    </div>
                </div>
            }
            {/* for  inspiration*/}
            {
                activeTab === "inspiration" && <div className=' mt-[46px] '>
                    <div className=''>
                        {isInspiration && isInspiration.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default ForShowBlogs;