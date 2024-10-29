import { Project } from "../types"

function ListItem({ item } : {item : Project}) {
    return (
        <tr className="ls-comp">
            <td className="ls-comp-name">{item.name}</td>
            <td className="ls-comp-mentor">{item.mentorAName}</td>
            <td className="ls-comp-pull">{item.pullRequests}</td>
        </tr>
    )
}

export default ListItem