import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-slate-200 lg:h-[550px] rounded-xl my-12">
            <div className="flex justify-around items-center lg:py-20 py-12">
                <div>
                    <h1 className="lg:text-7xl text-4xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                    <Link to="/listedBooks"><button className="btn bg-green-500 text-white lg:mt-16 mt-10 px-7 text-lg">View The List</button></Link>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/TM324C8/pngwing-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;