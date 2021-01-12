import {useEffect, useState} from 'react'
import './main.css';
import background from '../../images/bg.mp4';
import mern from '../../images/mern.png';

const words = ['Web Developer', 'HTML, CSS, JavaScript, Node.JS, React.JS', 'Web Developer'];

export const LandingPage = ()=>{
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const timeout2 = setTimeout(()=>{
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (index === words.length) return;
        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ){
            setReverse(true);
            return;
        }
        if (subIndex === 0 && reverse){
            setReverse(false);
            setIndex((prev) => prev+1);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev)=> prev + (reverse ? -1 : 1));
        }, 150);
        return () => clearTimeout(timeout);
    }, [subIndex,index, reverse]);

    return(
        <main>
            <section className="main-section-landing">
                <video src={background} muted loop autoPlay />
                <div className="main-section-myInfo">
                    <h1>Patrick Pontes</h1>
                    <h2>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h2>
                </div>
                <div className="main-section-buttons">
                    <a href="#" id="btn-curriculo">Curriculo</a>
                    <a href="#Projects" id="btn-projetos">Meus Projetos</a>
                    <a href="#GitHub" id="btn-github">GitHub</a>
                </div>
            </section>
        </main>
        
    )
}
export const About = ()=>{
    return(
        <section className="main-section-about">
            <p>Desenvolvedor Web Júnior, com foco em frontend. Atualmente ampliando meus conhecimentos em Mongo, Express, React e Node. Também curto muito aprender sobre cyber security.</p>
            <div className="image-container">
                <img src={mern} alt="mern stack png" />
            </div>
        </section>        
    )
}