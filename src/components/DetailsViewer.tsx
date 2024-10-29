import { Project } from "../types"

function DetailsViewer({item} : {item : Project}) {
    return (
        <div className="org-dash-viewer-main">
            <div className="org-dash-viewer-header">
                Project Details
            </div>
            <div className="org-dash-viewer-det">
                <div className="org-dash-name">
                    Name: {item.name}
                </div>
                <div className="org-dash-url">
                    URL: <a href={item.repoUrl} target="_blank">{item.repoUrl}</a>
                </div>
                <div className="org-dash-a-mentor">
                    Mentor Name: {item.mentorAName}
                </div>
                <div className="org-dash-b-mentor">
                    Secondary Mentor Name: {item.mentorBName}
                </div>
                <div className="org-dash-desc">
                    Description: {item.description}
                </div>
                <div className="org-dash-tags">
                    Tags: {item.tags.map((item) => (
                        <div className="org-dash-tag">{item}</div>
                    ))}
                </div>
                <div className="org-dash-comm">
                    Comm Channel: {item.communicationChannel}
                </div>
                <div className="org-dash-pull">
                    Pull Requests: {item.pullRequests}
                </div>
            </div>
            <div className="org-dash-det-btn">
                <div className="org-dash-det-btn-accept">
                    <button>Accept</button>
                </div>
                <div className="org-dash-det-btn-reject">
                    <button>Reject</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsViewer