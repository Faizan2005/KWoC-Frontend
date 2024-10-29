export type Project = {
    Name: string;
    Description: string;
    RepoURL: string;
    ReadmeURL: string;
    tags: string[];
    comm_channel: string | null;
    pulls: number;
    men_a_name: string;
    men_b_name: string;
    ProjectStatus: boolean;
}