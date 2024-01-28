

const Spotlight = () => {
    return (
        <div className="md:mt-32">
            <div className="h-[392px] bg-[#FFC300] rounded-bl-2xl md:mb-32 flex items-center justify-center">
                <div className="grid grid-cols-1 text-left md:grid-cols-2 m-auto w-full md:ml-10 lg:grid-cols-4">
                    <div>
                        <img className="object-cover md:h-[196px] md:w-[262px]" src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1678957949479-b1e876bee3f1.jpeg" alt="" />
                        <h3 className="text-2xl hover:underline font-semibold font-Bricolage">We are stronger as a group than an individual</h3>
                    </div>
                    {/* 2nd */}
                    <div>
                        <img className="object-cover md:h-[196px] md:w-[262px]" src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1636467472048-99be973392b2.jpeg" alt="" />
                        <h3 className="text-2xl hover:underline font-semibold font-Bricolage">Understanding the power of bitcoin and blockchain</h3>
                    </div>
                    {/* 3rd */}
                    <div>
                        <img className="object-cover md:h-[196px] md:w-[262px]" src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1683383635161-6b7412d1dc4a.jpeg" alt="" />
                        <h3 className="text-2xl hover:underline font-semibold font-Bricolage">New frontiers in the job market and adaptive careers for the future</h3>
                    </div>
                    {/* 4th */}
                    <div>
                        <img className="object-cover md:h-[196px] md:w-[262px]" src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1598903846194-692691a2b8b3.jpeg" alt="" />
                        <h3 className="text-2xl hover:underline font-semibold font-Bricolage">I believe the world is one big family</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;