const ChatRoom = () => {
    return (
        <div className="py-4 m-5 w-50 shadow bg-white text-dark border rounded container" style={{height: "100%"}}>
            <div className="text-center px-3 mb-4 text-capitalize">
                <h1 className="text-info mb-4">Gaming Chat Box</h1>
            </div>
            <div className="bg-light border rounded p-3 mb-4" style={{height:"450px", overflowY:"scroll"}}>
                <div className="row justify-content-end pl-5">
                    <div className="d-flex flex-column align-items-end m-2 shadow p-2  border rounded w-auto" style={{background:"#E1F0F0"}}>
                        <div>
                            <strong className="m-1">Leena</strong>
                            <small className="text-muted">2 min ago</small>
                        </div>
                        <h4 className="m-1">Hello there</h4>
                    </div>   
                </div>

                <div className="row justify-content-start">
                    <div className="d-flex flex-column m-2 shadow p-2 bg-white border rounded w-auto">
                        <div>
                            <strong className="m-1">Rachu</strong>
                            <small className="text-muted">2 min ago</small>
                        </div>
                        <h4 className="m-1">Hello there</h4>
                    </div>   
                </div>
            </div>
            <div className="form-group d-flex">
                <input type="text" className="form-control bg-light" name="message" placeholder="Type your message"/>
                <button type="button" className="btn btn-info mx-2 ">Send</button>
            </div>
        </div>
    )
}

export default ChatRoom;