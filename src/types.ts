export type Project = {
    name: string;
    description: string;
    repoUrl: string;
    readmeUrl: string;
    tags: string[];
    communicationChannel?: string; 
    pullRequests: number;
    mentorAName: string;
    mentorBName: string;
    isProjectActive: boolean;
};
