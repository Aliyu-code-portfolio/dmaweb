import React, { useState } from "react";
import { sendMessage } from "../../services/firebase";
import { MdDoneAll } from "react-icons/md"
import { Bounce } from "react-activity";
// function onClickButton(event) {
//     event.preventDefault();
// }

function Message() {
    const [sent, setSent] = useState(false)
    const [load, setLoad] = useState(false)
    const [name, setName] = useState(null)
    const [num, setNum] = useState(null)
    const [email, setemail] = useState(null)
    const [message, setMessage] = useState(null)

    const onClickButton = () => {
        if (name && num && email && message) {
            setLoad(true)
            setTimeout(sendMessage(name, num, email, message, handleSent), 3000);
        }
        else {
            alert("Please fill the form")
        }
    }
    function handleSent() {
        setLoad(false)
        setSent(true)
    }
    function handleName(event) {
        setName(event.target.value);
    }
    function handleNum(event) {
        setNum(event.target.value);
    }
    function handleEmail(event) {
        setemail(event.target.value);
    }
    function handleMessage(event) {
        setMessage(event.target.value);
    }
    return (
        <>
            <div className="my-5">

            </div>

            <div className="container contact-div mb-50">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        {sent ? <><MdDoneAll size={40} color='green' /> </>
                            : <form>
                                <div className="form-group text-light">
                                    <label for="exampleFormControlInput1">Enter Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Your Name"
                                        onChange={handleName}
                                        value={name}
                                    />
                                </div>
                                <div className="form-group pt-3 text-light">
                                    <label for="exampleFormControlInput1">Contact Number</label>
                                    <input
                                        type="numeric"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="+234"
                                        onChange={handleNum}
                                        value={num}
                                    />
                                </div>
                                <div className="form-group pt-3 text-light">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        onChange={handleEmail}
                                        value={email}
                                    />
                                </div>

                                <div className="form-group pt-3 text-light">
                                    <label for="exampleFormControlTextarea1">
                                        Type your Message Here
                </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Message"
                                        onChange={handleMessage}
                                        value={message}
                                    ></textarea>
                                </div>

                                <div className="col-12 pt-3 text-light mb-5">
                                    <button
                                        onClick={onClickButton}
                                        className="btn btn-outline-primary"
                                        type="submit"
                                    >
                                        {load ? <Bounce /> : 'Submit'}
                                    </button>
                                </div>
                            </form>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;