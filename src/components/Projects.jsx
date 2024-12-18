import Project from "./Project";
import projectsData from '../data/projects.json';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Projects() {

    const projects = projectsData.projects;

    return (
        <div className="w-fit">
            <h1 className="text-white text-2xl mb-3"><a className="text-orange-500 text-2xl">*</a> Projects</h1>
            <ul>
                {projects.map((project) => {
                return (
                    <li className="mb-4">
                        <Project projectName={project.projectName} redirect={project.redirect} description={project.description} techStack={project.techStack}></Project>
                    </li>
                );
                })}
            </ul>
            <div className="w-fit">
                <a href="https://github.com/Hasan-Al-Khazraji" target="_blank"><h3 className="text-orange-500 text-sm">View More Projects <ArrowOutwardIcon></ArrowOutwardIcon></h3></a>
            </div>
        </div>
    );
}