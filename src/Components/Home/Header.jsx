
import Lottie from 'lottie-react';
import animation from '../../assets/forHeader.json';

const Header = () => {
    return (
        <div className="md:h-[70vh] md:flex">
            <div className="flex-1 md:p-10">
                <h1 className="md:mt-6 text-3xl md:leading-loose text-left text-black font-Bricolage">
                    <span className="text-6xl font-bold">T</span>his is Atlanta. We are a community that celebrates contemporary
                    <span className="text-3xl font-bold"> culture focused </span> on technology, design, art, and web.
                </h1>
            </div>
            <div className="flex-1">
                <Lottie className="md:h-[450px]" animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Header;
