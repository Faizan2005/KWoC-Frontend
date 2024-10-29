import { Project } from "../types"

function ListItem({ item } : {item : Project}) {
    return (
        <div className="ls-comp">
            <div className="ls-comp-name">{item.Name}</div>
            <div className="ls-comp-mentor">{item.men_a_name}</div>
            <div className="ls-comp-pull">{item.pulls}</div>
        </div>
    )
}

export default ListItem