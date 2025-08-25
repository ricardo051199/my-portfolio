import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link href={project.link} target='_blank'>
            <div className="p-3 hover:bg-[#D4C9BE] cursor-pointer">
            <h3>{project.name}</h3>
            </div>
        </Link>
    );
};

export default ProjectCard;