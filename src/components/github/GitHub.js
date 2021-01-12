import { useEffect, useState } from 'react';
import './main.css';

export const GitHub = () =>{
    const [githubData, setGithubData] = useState([]);

    const getRepos = async()=>{
        const response = await fetch('https://api.github.com/users/PatrickPontes44/repos');
        const repos = await response.json();
        setGithubData(repos);
    }
    useEffect(() => {
        getRepos();
    }, [])
    return(
        <section className="section-github" id="GitHub">
            <header>
                <h2>Meus Repositórios</h2>
            </header>
            <div className="projects-container">
                {
                    githubData.map((item)=>{
                        return (
                        <div className='project' key={item.id}>
                            <h3>{item.name}</h3>
                            <p className={item.description ? '':'no-desc'}>{item.description ? item.description:'Sem descrição'}</p>
                            <a href={item.url} target="_blank" rel="noreferrer">Acessar Repositório</a>
                        </div>
                        )
                    })
                }
            </div>
        </section>
    )
}