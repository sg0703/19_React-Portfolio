import React, { useState } from 'react';

const Contact = () => {
    // use state for form values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // function for handling submitting form, simulate sending data
    const onSubmit = (e) => {
        e.preventDefault();

        // make sure form is properly filled out before allowing form to "send"
        if(name !== '' && email !== '' && checkEmail(email) && message !== '') {
            const sampleFormDataSend = {
                name, email, message
            };

            // "send" data
            console.log(sampleFormDataSend);

            // reset form
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    // check if email address is valid
    const checkEmail = (email) => {
        // taken from activity 16 - this appears to be a universal REGEX for validating emails based on my googling 
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // display error message if there is one
    const renderError = () => {
        if(name === '') {
            return 'Please enter a name!';
        }

        if(email === '' || !checkEmail(email)) {
            return 'Please enter a valid email address!';
        }

        if(message === '') {
            return 'Please enter a message!';
        }
    }

    // display form and error message 
    return (
        <div className="row w-100 m-0 p-0 d-flex justify-content-center" id="contact">
        <div className="col-md-8 py-3">
            <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                    className="form-control" 
                    id="message" 
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className="form-group">
                <small id="emailHelp" className="form-text text-muted">{renderError()}</small>
            </div>
            <button 
                type="submit" 
                className="btn btn-secondary m-1"
                onClick={onSubmit}
            >
            Submit
            </button>
            </form>
        </div>
    </div>
    );
}

export default Contact;