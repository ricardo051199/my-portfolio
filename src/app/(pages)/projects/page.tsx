import { ProjectsList } from "@/data/ProjectsList";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    return (
        <section>
            <h2>Projects List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ProjectsList.map((project: Project) => (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;