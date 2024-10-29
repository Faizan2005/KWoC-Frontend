import { Project } from "../types"

function DetailsViewer({item} : {item : Project}) {
    if(!item.name) return (
        <div></div>
    );
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
                    Tags: {item.tags && item.tags.map((item) => (
                        <div className="org-dash-tag">{item}</div>
                    ))}
                </div>
                <div className="org-dash-comm">
                    Comm Channel: {item.communicationChannel}
                </div>
                <div className="org-dash-pull">
                    Pull Requests: {item.pullRequests}
                </div>
                {item.isProjectReview && 
                    <div className="org-dash-review">
                        {item.isProjectApprove ? <div className="org-dash-approve">Approved</div> : <div className="org-dash-reject">Rejected</div>}
                    </div>
                }
            </div>
            {!item.isProjectReview && <div className="org-dash-det-btn">
                <div className="org-dash-det-btn-accept">
                    <button className="approve-btn">Approve</button>
                </div>
                <div className="org-dash-det-btn-reject">
                    <button className="reject-btn">Reject</button>
                </div>
            </div>}
            {item.isProjectReview && <div className="org-dash-det-btn">
                <div className="org-dash-det-btn-accept">
                    <button>Review</button>
                </div>
                <div className="org-dash-det-btn-reject">
                {item.isProjectApprove ? <button className="reject-btn">Reject</button> : <button className="approve-btn">Approve</button>}
                </div>
            </div>}
        </div>
    )
}

export default DetailsViewer