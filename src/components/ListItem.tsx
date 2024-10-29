import { Project } from "../types"

function ListItem({ item } : {item : Project}) {
    return (
        <div className="ls-comp">
            <div className="ls-comp-name">{item.name}</div>
            <div className="ls-comp-mentor">{item.mentorAName}</div>
            <div className="ls-comp-pull">{item.pullRequests}</div>
        </div>
    )
}

export default ListItem