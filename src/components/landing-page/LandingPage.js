import {useEffect, useState} from 'react'
import './main.css';
import background from '../../images/bg.mp4';
import mern from '../../images/mern.png';

const words = ['Web Developer', 'HTML, CSS, JavaScript, Node.JS, React.JS', 'Web Developer'];
const words2 = ['Que legal, ', 'eu também moro em Curitiba.'];

export const LandingPage = ()=>{
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        getUserLocation()
    }, [])

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


    const getUserLocation = async ()=>{
        const response = await fetch('https://geolocation-db.com/json/');
        if(response.status == 200){
            const data = await response.json()
            console.log(data)
            setUser(data)
        }
    }

    return(
        <main>
            <section className="main-section-landing">
                <video src={background} muted loop autoPlay />
                <div className="main-section-myInfo">
                    <h1>Patrick Pontes</h1>
                    <h2>{`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h2>
                    {
                        user ?
                        <h3>Que legal, você é de { user?.city }. É uma cidade muito bacana!</h3>
                        :
                        null
        
                    }
                </div>
                <div className="main-section-buttons">
                    <a href="/docs/Patrick Potes - CV.pdf" id="btn-curriculo" download="Patrick Pontes CV">Curriculo</a>
                    <a href="#Projects" id="btn-projetos">Meus Projetos</a>
                    <a href="https://github.com/PatrickPontes44" id="btn-github" target="_blank">GitHub</a>
                </div>
            </section>
        </main>
        
    )
}
export const About = ()=>{
    return(
        <section className="main-section-about">
            <p>Desenvolvedor Web Júnior, com foco em frontend. Trabalho com tecnologias como React.js, Vue.js, Figma, Material UI, Sass, Bootstrap e I18next. Também curto muito aprender sobre cyber security.</p>
            <div className="image-container">
                <img src={mern} alt="mern stack png" />
            </div>
        </section>        
    )
}