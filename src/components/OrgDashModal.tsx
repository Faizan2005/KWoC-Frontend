import "../styles/OrgDashModal.css"

function OrgDashModal({ isReject, onClose } : {isReject : boolean, onClose : () => void}) {
    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal-main" onClick={handleWrapperClick}>
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="modal-title">
                        Why do you want to {isReject ? "reject" : "approve"} the project?
                    </div>
                    <div className="modal-inp">
                        <textarea className="modal-textarea">

                        </textarea>
                    </div>
                    <div className="modal-btn">
                        <button className="modal-cancel" onClick={onClose}>Cancel</button>
                        {isReject ? <button className="reject-btn">Reject</button> : <button className="approve-btn">Approve</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgDashModal