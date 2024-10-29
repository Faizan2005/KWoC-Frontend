import { useState } from 'react'
import ListItem from '../components/ListItem'
import DetailsViewer from '../components/DetailsViewer'
import { Project } from '../types'

function OrgDash() {
	const [allData, setAllData] = useState<Project[]>([]);
	const [filterData, setFilterData] = useState<Project[]>([]);

	const [selItem, setSelItem] = useState<Project>({} as Project);

	const showAll = () => {
		setFilterData(allData);
	}

	const showAccept = () => {
		setFilterData(allData.filter((item) => item.ProjectStatus))
	}

	const showReject = () => {
		setFilterData(allData.filter((item) => !item.ProjectStatus))
	}
	return (
		<div>
			<div className="org-dash-left">
				<div className="org-dash-type-btn">
					<div className="btn-all">
						<button onClick={() => showAll()}>All</button>
					</div>
					<div className="btn-accept">
						<button onClick={() => showAccept()}>Accepted</button>
					</div>
					<div className="btn-rej">
						<button onClick={() => showReject()}>Rejected</button>
					</div>
				</div>
				<div className="org-dash-view">
					
				</div>
			</div>
			<div className="org-dash-right">
				<DetailsViewer item={selItem}/>
			</div>
		</div>
  	)
}

export default OrgDash