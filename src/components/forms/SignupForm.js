import { useEffect, useState } from "react";
import { errorMsgs, isEmail, isEmpty, isNumber, isPwdConfirmed, isPwdStrong, isReqLength } from "../../lib/Validation";

function SignupForm() {
    const [inputs, setInputs] = useState({});
    let errorMsgFields;

    useEffect(() => {
        errorMsgFields = document.getElementsByClassName('err-msg-field');
    });

    const changehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let errInputs = {};
        /*
        form validation
        */

        let expectedInputs = ['first_name', 'last_name', 'phone', 'email', 'password', 'password_confirm'];

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

        // number validation
        if(!isNumber(inputs.phone)) {
            if(Object.keys(errInputs).includes('phone')) {
                errInputs['phone'].push('number');
            } else {
                errInputs['phone'] = ['number'];
            }
        }

        // length verification for phone number
        if(inputs.phone && !isReqLength(inputs.phone, 10, 'equal')) {
            if(Object.keys(errInputs).includes('phone')) {
                errInputs['phone'].push('length');
            } else {
                errInputs['phone'] = ['length'];
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

        // password confirmed validation
        if(!isPwdConfirmed(inputs.password, inputs.password_confirm)) {
            if(Object.keys(errInputs).includes('password_confirm')) {
                errInputs['password_confirm'].push('passwordConfirm');
            } else {
                errInputs['password_confirm'] = ['passwordConfirm'];
            }
        }

        
    
        let oldErrs = document.getElementsByClassName('err-msg');

        /*
        run an operation that removes old errors that have been solved
        */
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
                <h2 className="text-center">Create Account</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" name="first_name" className="form-control" id="firstName" value={inputs.first_name || ""} onChange={changehandler} aria-describedby="fNameErr"/>
                        <div className="form-text err-msg-field" id="first_name_err"></div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="mt-2 form-label">Last Name</label>
                        <input type="text" name="last_name" className="form-control" id="lastName" value={inputs.last_name || ""} onChange={changehandler} />
                        <div className="form-text err-msg-field" id="last_name_err"></div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mt-2 form-label">Phone Number</label>
                        <input type="text" name="phone" className="form-control" id="phone" value={inputs.phone || ""} onChange={changehandler} />
                        <div className="form-text err-msg-field" id="phone_err"></div>
                    </div>
                    <div>
                        <label htmlFor="eMail" className="mt-2 form-label">E-Mail</label>
                        <input type="email" name="email" className="form-control" id="eMail" value={inputs.email || ""} onChange={changehandler} />
                        <div className="form-text err-msg-field" id="email_err"></div>
                    </div>
                    <div>
                        <label htmlFor="password" className="mt-2 form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" value={inputs.password || ""} onChange={changehandler} />
                        <div className="form-text err-msg-field" id="password_err"></div>
                    </div>
                    <div>
                        <label htmlFor="password_confirm" className="mt-2 form-label">Confirm Password</label>
                        <input type="password" name="password_confirm" className="form-control" id="password_confirm" value={inputs.password_confirm || ""} onChange={changehandler} />
                        <div className="form-text err-msg-field" id="password_confirm_err"></div>
                    </div>

                    
                    <input className="btn btn-primary mt-4" type="submit" value="Create Account" />
                    <p className="mt-2">Already have an account? <a href="#0" className="text-decoration-none">Click here to Login</a></p>
                </form>
            </div>
            
        </div>
    )
}

export default SignupForm;