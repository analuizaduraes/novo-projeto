import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FcSearch } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";

export function Home() {

    const [repositories, setRepositories] = useState<any[]>([]);
    const navigate = useNavigate();

    const searchOnGithub = () => {
        fetch(`https://api.github.com/repositories`)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data)
                setRepositories(data);
            })
    }

    const checkDetail = (repository: any) => {
        navigate(`/details/${repository.full_name}`)
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-orange-300">

            <div className="flex flex-row items-center justify-center mb-12">
                <input type="text" placeholder="What are you looking for?" className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg p-2 outline-none transition placeholder-gray-400 w-80" />
                <div className="flex items-center justify-center">
                    <button
                        onClick={searchOnGithub}
                        type="button"
                        className="ml-5 bg-green-500 text-white px-4 py-2 rounded flex font-bold">
                        <FcSearch className="mr-2 mt-1" />
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                {repositories.map((repository) => (
                    <div key={repository.id}>
                        <p>{repository.full_name}</p>
                        <p>{repository.fork ? "It's a fork repository" : "Isn't a fork repository" }</p>
                        <p>{repository.id}</p>
                        <p>{repository.private ? "It's a private repository" : "Isn't a private repository"}</p>
                        <p>{repository.url}</p>

                        <div className="flex justify-center">
                        <button onClick={() => checkDetail(repository)} className="mt-4 bg-purple-700 text-white px-4 py-2 rounded flex">
                        <FcViewDetails className="mr-2 mt-1" />
                        Details
                        </button>
                            </div>
                        <div className="border-b mt-2 mb-12"></div>
                    </div>))}
            </div>
        </main>
    )

}