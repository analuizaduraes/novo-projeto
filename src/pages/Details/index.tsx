import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FaLink } from "react-icons/fa";

export function Details() {

    const { user, repo } = useParams();
    const [repositoryUser, setRepositoryUser] = useState<any>(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${user}/${repo}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data)
                setRepositoryUser(data);
            })
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-orange-300">
            {repositoryUser && <>
                <p className="mt-2 text-4xl">{repositoryUser.full_name}</p>
                <p className="mt-2">{repositoryUser.name}</p>
                <p className="mt-2">{repositoryUser.description}</p>
                <p className="mt-2">{repositoryUser.archive_url}</p>
                <p className="mt-2">{repositoryUser.comments_url}</p>
                <p className="mt-2">{repositoryUser.commits_url}</p>
                <p className="mt-2">{repositoryUser.deployments_url}</p>
                <p className="mt-2">{repositoryUser.forks_url}</p>
                <p className="mt-2">{repositoryUser.labels_url}</p>
                <p className="mt-2">{repositoryUser.languages_url}</p>
                <p className="mt-2">{repositoryUser.notifications_url}</p>
                <p className="mt-2">{repositoryUser.subscribers_url}</p>
                <p className="mt-2">{repositoryUser.trees_url}</p>
            </>}

            {/*pra evitar que fique procurando o valor e ele for null ou undefined*/}
            {repositoryUser && (
                <a href={repositoryUser.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold flex mt-12">
                    <FaLink className="mr-2 mt-1" />
                    Go to GitHub
                </a>
            )}
        </div>
    )

}