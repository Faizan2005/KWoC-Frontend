import React from 'react'
import ListViewer from '../components/ListViewer'
import DetailsViewer from '../components/DetailsViewer'

function OrgDash() {
	return (
		<div>
			<div className="org-dash-left">
				<div className="org-dash-type-btn">
					<div className="btn-all">
						<button>All</button>
					</div>
					<div className="btn-accept">
						<button>Accept</button>
					</div>
					<div className="btn-rej">
						<button>Rejected</button>
					</div>
				</div>
				<div className="org-dash-view">
					<ListViewer />
				</div>
			</div>
			<div className="org-dash-right">
				<DetailsViewer />
			</div>
		</div>
  	)
}

export default OrgDash