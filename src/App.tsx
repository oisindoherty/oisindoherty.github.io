
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