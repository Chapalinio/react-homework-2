import React, { useState } from 'react'
import './RegistrationForm.css'

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeSurname = (e) => {
        setSurname(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        setSubmittedData({
            name,
            surname,
            email,
            phoneNumber
        });
    }

    return (
        <div className="reg-page">
            <div className="reg-card">
                <h2 className="reg-title">Registration</h2>

                <form className="reg-form" onSubmit={submit}>
                    <div className="reg-field">
                        <label className="reg-label" htmlFor="name">Name</label>
                        <input
                            className="reg-input"
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={onChangeName}
                            required
                        />
                    </div>

                    <div className="reg-field">
                        <label className="reg-label" htmlFor="surname">Surname</label>
                        <input
                            className="reg-input"
                            id="surname"
                            type="text"
                            placeholder="Enter surname"
                            value={surname}
                            onChange={onChangeSurname}
                        />
                    </div>

                    <div className="reg-field">
                        <label className="reg-label" htmlFor="email">Email</label>
                        <input
                            className="reg-input"
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={onChangeEmail}
                            required
                        />
                    </div>

                    <div className="reg-field">
                        <label className="reg-label" htmlFor="phone-number">Phone number</label>
                        <input
                            className="reg-input"
                            id="phone-number"
                            type="tel"
                            placeholder="+380..."
                            value={phoneNumber}
                            onChange={onChangePhoneNumber}
                        />
                    </div>

                    <button className="reg-btn" type="submit">Submit</button>
                </form>

                {submittedData && (
                    <div className="reg-result">
                        <h3 className="reg-result__title">Submitted data</h3>
                        <div className="reg-result__row">
                            <span>Name:</span>
                            <strong>{submittedData.name}</strong>
                        </div>
                        <div className="reg-result__row">
                            <span>Surname:</span>
                            <strong>{submittedData.surname}</strong>
                        </div>
                        <div className="reg-result__row">
                            <span>Email:</span>
                            <strong>{submittedData.email}</strong>
                        </div>
                        <div className="reg-result__row">
                            <span>Phone:</span>
                            <strong>{submittedData.phoneNumber}</strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RegistrationForm