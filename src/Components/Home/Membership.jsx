
const Membership = () => {
    return (
        <div className="bg-cover  bg-center md:h-[247px] brightness-95 md:mb-32" style={{ backgroundImage: 'url("https://myoan.fueko.net/content/images/size/w1600/2023/11/maxim-berg-sURsAcl9eQQ-unsplash.jpg")' }}>
            <div className="md:flex items-center  text-white">
                <div className="flex-1 mt-4 px-6 ml-6">
                    <h3 className="text-xl text-left font-Lato">Membership</h3>
                    <h1 className="text-5xl text-left font-Bricolage">Unlock full access to <span className="font-bold">Atlanta</span> and see the entire library of <span className="font-bold">paid-members</span> only posts</h1>
                </div>
                <div className="flex-1 space-y-4">
                    <button className="md:ml-44 bg-[#f33151] px-6 py-4 rounded-full text-white font-bold hover:bg-[#e1404a]">See our plans</button>
                    <p className="md:ml-44">Pssst! No surprises, cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Membership;