import { useEffect, useState } from "react";
import { errorMsgs, isEmail, isEmpty, isPwdStrong, isReqLength } from "../../lib/Validation";

function LoginForm() {
    const [inputs, setInputs] = useState({});

    // store all error message fields
    let errorMsgFields;

    useEffect(() => {
        errorMsgFields = document.getElementsByClassName('err-msg-field');
    });

    // function to set values of inputs
    const changehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    // function to handle form submission
    const submitHandler = (event) => {
        event.preventDefault();
        let errInputs = {};

        /*
        form validation
        */

        let expectedInputs = ['email', 'password'];

        // not initialized validation
        expectedInputs.forEach(expectedInput => {
            if(!(Object.keys(inputs).includes(expectedInput))) {
                errInputs[expectedInput] = ['empty'];
            }
        });

        // empty validation
        Object.keys(inputs).forEach(input => {
            if(isEmpty(inputs[input])) {
                //check if it has already been captured
                if( Object.keys(errInputs).includes(input) && !errInputs[input].includes('empty')) {
                    errInputs[input].push('empty');
                } else {
                    errInputs[input] = ['empty'];
                }
            }
        });

        // email validation
        if(inputs.email && !isEmail(inputs.email)) {
            if(Object.keys(errInputs).includes('email')) {
                errInputs['email'].push('email');
            } else {
                errInputs['email'] = ['email'];
            }
        }

        // password validation
        if(inputs.password && !isPwdStrong(inputs.password)) {
            if(Object.keys(errInputs).includes('password')) {
                errInputs['password'].push('password');
            } else {
                errInputs['password'] = ['password'];
            }
        }

        // length verification for password
        if(inputs.password && !isReqLength(inputs.password, 7, 'greater')) {
            if(Object.keys(errInputs).includes('password')) {
                errInputs['password'].push('length');
            } else {
                errInputs['password'] = ['length'];
            }
        }


        /*
        run an operation that removes old errors that have been solved
        */
        // store all old errors
        let oldErrs = document.getElementsByClassName('err-msg');

        
        // get ids of all new errors
        let newErrors = [];
        Object.keys(errInputs).forEach(errInput => {

            // get correct id of error field
            errInputs[errInput].forEach(err => {
                newErrors.push(errInput + '_' + err);
            });
        });

        // remove old errors that no longer exist
        Array.from(oldErrs).forEach(oldErr => {
            if(!newErrors.includes(oldErr.id)) {
                oldErr.remove();
            }
        });



        Object.keys(errInputs).forEach(errInput => {
            // get id of error div
            let errMsgField = document.getElementById(errInput + "_err");

            errInputs[errInput].forEach(err => {

                // define error message element id
                let errElementId = errInput + '_' + err;
                

                // create error element and give it an id
                let textElement = document.createElement("p");
                textElement.setAttribute('id', errElementId);
                textElement.setAttribute('class', 'err-msg');

                // check if error already exists then append it to the error section of the input element
                if(!document.getElementById(errElementId)) {
                    textElement.textContent = errorMsgs[err];
                    errMsgField.appendChild(textElement);
                }
            });
        });
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-6">
                <h2 className="text-center">Welcome</h2>
                <h2 className="text-center">Login</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="form-label">E-Mail</label>
                        <input type="email" name="email" id="email" className="form-control" value={inputs.email || ""} onChange={changehandler}/>
                        <div className="form-text err-msg-field" id="email_err"></div>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control" value={inputs.password || ""} onChange={changehandler}/>
                        <div className="form-text err-msg-field" id="password_err"></div>
                    </div>

                    <input className="btn btn-primary mt-4" type="submit" value="Login" />
                    <p className="mt-2">Don't have an account? <a href="#0" className="text-decoration-none">Click here to create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;