

const About = () => {
    return (
        <div>
            <div className="border bg-slate-300 rounded-xl lg:my-10">
                <h2 className="text-5xl font-bold text-center py-6">About</h2>
            </div>
            <h2 className="text-2xl font-bold text-center text-[#2874A6]">The man who does not read good books has no advantage over <br /> the man who cannot read them!!  - Mark Twain.</h2>
            <h1 className="text-3xl font-bold lg:my-12 my-2">Words from the Founder :</h1>
            <div className="my-8">
                <img className="mx-auto rounded-lg" src="https://i.ibb.co/f09fjK3/3789.webp" alt="" />
            </div>
            <p className="text-lg">I am Abdul Sattar Edhi, the founder and book enthusiast behind Book Pulse. I’ve been an avid reader since childhood. From then, I became a frequent visitor to local book fairs and libraries. My constant search for new stories to devour took me to countless literary events in Shotwell St, San Francisco, and the surrounding areas.</p>
            <p className="text-lg my-3">From local book fairs to regional literature festivals, I have been engaged in a continuous quest for literary exploration. I hardly even miss participating in book reading contests and bringing home several awards.</p>
            {/* Introduction */}
            <div>
                <h1 className="text-5xl font-bold my-8">Let’s Introduce To Worlds two Famous Founders of Library:</h1>
                <div className="grid lg:grid-cols-2  gap-6 grid-cols-1 my-12">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/Q8KrWSx/istockphoto-1368455871-612x612.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name :  Benjamin Franklin</h2>
                            <h4 className="font-semibold">Library :  Philadelphia </h4>
                            <p className="font-semibold">Year of Publishing :  1731</p>
                            <p><span className="font-semibold">Description :</span>
                                Benjamin Franklin was a polymathic American statesman, scientist, inventor, author, and diplomat. Born in 1706, he played a pivotal role in American history, contributing to the Declaration of Independence and the Constitution. Franklin's inventions include the lightning rod and bifocals. His wit and wisdom are immortalized in "Poor Richard's Almanack."</p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[380px]" src="https://i.ibb.co/8X4gtQB/images-1.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name :  Andrew Carnegie</h2>
                            <h4 className="font-semibold">Library :  Numerous public library </h4>
                            <p className="font-semibold">Year of Publishing :  1831</p>
                            <p><span className="font-semibold">Description :</span>
                            He was a Scottish-American industrialist and philanthropist who established numerous public libraries across the United States and other countries. Carnegie believed in the importance of access to knowledge and education for all, and his contributions led to the establishment of many Carnegie libraries, which provided free access to books and resources for communities.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="flex justify-around items-center">
                <div className="text-center">
                    <h1 className="text-xl font-bold my-3">Address</h1>
                    <p>BookPulse c/o, 1045, <br />Karachi, Pakistan.</p>
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-bold my-3">GET IN TOUCH</h1>
                    <h1>Email : contact@bookpulse.com</h1>
                </div>
            </div>
        </div>
    );
};

export default About;