import "./form.css";
import {useState} from "react";

const link = "https://i.pinimg.com/originals/f7/7f/02/f77f021d460462ac5953bfc17a659154.jpg";

const Form = () => {
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const inputs = [
        {
            id: 1,
            name: "userName",
            placeholder: "Username",
            type: "text",
            value: userName,
            setValue: setUserName,
            errorMessage: "Username should be 8-10 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,10}$",
            required: true,
            isFocused: isUsernameFocused,
            setFocused: setIsUsernameFocused
        },
        {
            id: 2,
            name: "email",
            placeholder: "Email",
            type: "email",
            value: email,
            setValue: setEmail,
            errorMessage: "It should be a valid email address",
            required: true,
            isFocused: isEmailFocused,
            setFocused: setIsEmailFocused
        },
        {
            id: 3,
            name: "phoneNumber",
            placeholder: "Phone Number",
            type: "number",
            value: phoneNumber,
            setValue: setPhoneNumber,
            errorMessage: "It should be a valid phone number!",
            pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
            required: true,
            isFocused: isPhoneNumberFocused,
            setFocused: setIsPhoneNumberFocused
        },
        {
            id: 4,
            name: "password",
            placeholder: "Password",
            type: "password",
            value: password,
            setValue: setPassword,
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            pattern: "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{8,20}",
            required: true,
            isFocused: isPasswordFocused,
            setFocused: setIsPasswordFocused
        },
        {
            id: 5,
            name: "confirmPassword",
            placeholder: "Confirm Password",
            type: "password",
            value: confirmPassword,
            setValue: setConfirmPassword,
            errorMessage: "Passwords don't match!",
            pattern: password,
            required: true,
            isFocused: isConfirmPasswordFocused,
            setFocused: setIsConfirmPasswordFocused
        }
    ];

    return (
        <div className={"form-container"}>
            {/*left*/}
            <div className={"image-container"}>
                <img src={link} alt=""/>
            </div>

            {/*right*/}
            <div className={"right"}>
                <h2>Please Sign Up to Continue</h2>
                <form className={"form"}>
                    {inputs.map(({id, placeholder, type, value, setValue, errorMessage, required, pattern, isFocused, setFocused}) => <div key={id} className={"form-input"}>
                        <input
                            onBlur={() => setFocused(true)}
                            isFocused={isFocused.toString()}
                            onChange={e => setValue(e.target.value)}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            required={required}
                            pattern={pattern}
                        />
                        <span>{errorMessage}</span>
                    </div>)}

                    <button className={""}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Form;