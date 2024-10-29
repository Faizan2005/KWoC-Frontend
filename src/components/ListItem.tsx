import { Project } from "../util/types"

function ListItem({ item, onClick } : {item : Project, onClick: (item: Project) => void}) {
    return (
        <tr className="ls-comp" onClick={() => onClick(item)}>
            <td className="ls-comp-name">{item.name}</td>
            <td className="ls-comp-mentor">{item.mentorAName}</td>
            <td className="ls-comp-pull">{item.pullRequests}</td>
        </tr>
    )
}

export default ListItem