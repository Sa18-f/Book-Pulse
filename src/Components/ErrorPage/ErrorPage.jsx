import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="max-w-[1170px]">
            <div className="lg:ml-[700px] text-center my-96">
                <h2 className="text-xl">{error.statusText || error.message}</h2>
                {
                    error.status === 404 && <div>
                        <h3 className="text-3xl font-bold my-4">404 - Page not found</h3>
                        <Link to="/"><button className="btn">Home</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;