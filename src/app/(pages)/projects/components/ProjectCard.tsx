'use client';

import { Button } from '@/app/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
            <div className="p-6">
                <h3 className="mb-3">{project.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                        >
                        {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <Button size="sm" onClick={() => window.open(project.demo, '_blank')} className="flex-1 bg-blue-100 dark:bg-blue-900/30">
                        <ExternalLink className="w-4 h-4 mr-2" />Demo
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;