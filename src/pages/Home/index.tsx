import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Home() {
    const [repository, setRepository] = useState('');
    const navigate = useNavigate();
    const changePage = () => {
    return (
        navigate("/details")
    )
    }

return (
    <main className="flex flex-col items-center justify-center min-h-screen">
        <input type="text" placeholder="Enter the repository name here" value={repository} onChange={(e) => { setRepository(e.target.value) }} />
        <button onClick={changePage} type="button" title="Show repository"></button>
    </main>
)

}