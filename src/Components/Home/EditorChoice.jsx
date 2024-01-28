

const EditorChoice = () => {
    return (
        <div>
            <div className="flex">
                <h1 className="text-2xl">Editor’s Choice</h1>
            </div>
            <div className="bg-[#FFC300] rounded-tr-2xl md:h-[890px]">
                <div className="px-10 md:flex gap-6">
                    <div className="flex-1 text-left">
                        <img className="object-cover md:h-[434px] md:w-[579px]" src="https://myoan.fueko.net/content/images/size/w1200/format/webp/2023/11/photo-1683383635161-6b7412d1dc4a.jpeg" alt="" />
                        <div className="flex text-xl font-Lato">
                            <h3>September 9, 2023</h3>
                            <h3>by userName</h3>
                            <h3>#innovation</h3>
                        </div>
                        <a className="text-5xl font-semibold leading-[63px] text-left font-Bricolage hover:underline">New frontiers in the job market and adaptive careers for the future</a>
                        <p className="text-2xl font-Lato text-left">Discover how artificial intelligence is reshaping the employment landscape. Explore the impact of AI on job markets, from automation to the emergence of new roles.</p>
                    </div>
                    <div className="flex-1 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="text-left">
                                <img className='object-cover md:h-[196px] md:w-[262px]' src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1608142172654-318a624fe4ec.jpeg" alt="" />
                                <h3 className="text-xl font-Lato hover:underline">August 24, 2023</h3>
                                <h3>in #design</h3>
                                <h3 className="text-2xl hover:underline font-semibold font-Bricolage">It’s a new era in design, there are no rules</h3>
                            </div>
                            {/* 2nd */}
                            <div className="text-left ">
                                <img className='object-cover md:h-[196px] md:w-[262px]' src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1688549143237-e258a419d200.jpeg" alt="" />
                                <h3 className="text-xl font-Lato">August 4, 2023</h3>
                                <h3>in #lifestyle</h3>
                                <h3 className="text-2xl hover:underline font-semibold font-Bricolage">A healthy outside starts from the inside</h3>
                            </div>
                            {/* 3rd */}
                            <div className="text-left">
                                <img className='object-cover md:h-[196px] md:w-[262px]' src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1662511026678-63e8f599f03a.jpeg" alt="" />
                                <h3 className="text-xl font-Lato">June 29, 2023</h3>
                                <h3>in #lifestyle</h3>
                                <h3 className="text-2xl hover:underline font-semibold font-Bricolage">Fashion designers and their artistic color stories</h3>
                            </div>
                            <div className="text-left">
                                <img className='object-cover md:h-[196px] md:w-[262px]' src="https://myoan.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1529068755536-a5ade0dcb4e8.jpeg" alt="" />
                                <h3 className="text-xl font-Lato">June 1, 2023</h3>
                                <h3>in #creative</h3>
                                <h3 className="text-2xl font-semibold font-Bricolage hover:underline">You must grow like a tree</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorChoice;