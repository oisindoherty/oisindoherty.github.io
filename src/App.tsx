
import {
    Chess2, Commander,
    CraftableMannequins, DHOF,
    DinoDig,
    KoboldCuisine, LethalCompany, Lugia, Mario64,
    Morshdle, NicePotion, Otter,
    PooltoyZ,
    ProjectInfo,
    RPG,
    SeveranceAnimation, ThisSite, YCH
} from "./projects.ts";

import "./App.css";
import * as React from "react";


export default function App() {

    return (
        <div>
            <div id="header">
                <p className="permanent-marker-regular" id="header-name">OISIN DOHERTY</p>
                <p className="roboto-light" id="header-subtitle">software engineer // 3D artist // game dev</p>
            </div>

            <div className={"projects-2"}>
                {[
                    Project(KoboldCuisine),
                    Project(SeveranceAnimation)
                ]}
            </div>
            <div className={"projects-3"}>
                {[
                    Project(Morshdle),
                    Project(Chess2),
                    Project(DinoDig),
                ]}
            </div>
            <div className={"projects-2"}>
                {[
                    Project(YCH),
                    Project(DHOF)
                ]}
            </div>
            <div className={"projects-3"}>
                {[
                    Project(CraftableMannequins),
                    Project(PooltoyZ),
                    Project(Commander),
                ]}
            </div>
            <div className={"projects-2"}>
                {[
                    Project(Lugia),
                    Project(Otter)
                ]}
            </div>
            <div className={"projects-3"}>
                {[
                    Project(NicePotion),
                    Project(Mario64),
                    Project(LethalCompany),
                ]}
            </div>
            <div className={"projects-2"}>
                {[
                    Project(RPG),
                    Project(ThisSite)
                ]}
            </div>
            <ContactInfo />
        </div>


    );
}

function Project(project: ProjectInfo) {
    const style = {
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    console.log("rendering project", project.title);

    return (
        <a className={'project-container'} href={project.link} style={style}>
            <div className={"project-card"}>
                <h1 className="project-title permanent-marker-regular">{project.title}</h1>

                {project.blurb && <div className="project-blurb roboto">{project.blurb}</div>}

                {project.description.map((line) => {
                    return <p className="project-description roboto">{line}</p>
                })}

                <div className={"project-tags"}>
                    {project.tags.map((tag) => {
                        return <p className="project-tag">{tag}</p>
                    })}
                </div>
            </div>
        </a>
    )
}

function ContactInfo() {

    const [showInfo, setShowInfo] = React.useState(false);

    const placeholder = (
        <div id='contact-info'>
            <div className="contact-info-link">
                {"CONTACT INFO <"}
            </div>
        </div>
    )

    const reversedEmail = "moc.liamg@ytrehodpnisio:otliam";
    const reversedGithub = "ytrehodnisio/moc.buhtig//:sptth";
    const reversedLinkedIn = "/661935a12-ytrehod-nisio/ni/moc.nideknil.www//:sptth"

    function reversedString(str: string) {
        return str.split("").reverse().join("");
    }

    const info = (
        <div id='contact-info'>
            <a className="contact-info-link" href={reversedString(reversedLinkedIn)} id="linkedin-card">
                <p>LINKEDIN</p>
                <svg height="28" viewBox="0,0,256,256" width="28" x="0px" xmlns="http://www.w3.org/2000/svg"
                     y="0px">
                    <g fill="#ffffff" fill-rule="nonzero" font-family="none" font-size="none" font-weight="none"
                       stroke="none" stroke-dasharray="" stroke-dashoffset="0" stroke-linecap="butt"
                       stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1"

                       text-anchor="none">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path>
                        </g>
                    </g>
                </svg>

            </a>
            <a className="contact-info-link" href={reversedString(reversedGithub)} id="github-card">
                <p>GITHUB</p>
                <svg height="28" viewBox="0,0,256,256" width="28" x="0px" xmlns="http://www.w3.org/2000/svg"
                     y="0px">
                    <g fill="#ffffff" fill-rule="nonzero" font-family="none" font-size="none" font-weight="none"
                       stroke="none" stroke-dasharray="" stroke-dashoffset="0" stroke-linecap="butt"
                       stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1"

                       text-anchor="none">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                        </g>
                    </g>
                </svg>

            </a>
            <a className="contact-info-link" href={reversedString(reversedEmail)} id="mail-card">
                <p>EMAIL</p>
                <svg height="28" viewBox="0 -960 960 960" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160zm320-280L160-640v400h640v-400zm0-80 320-200H160zM160-640v-80 480z"
                        fill="#ffffff"/>
                </svg>

            </a>
        </div>
    )

    return (
        <div id='contact-info' onClick={() => {
            setShowInfo(true);
        }}>
            {showInfo ? info : placeholder}
        </div>
    )
}