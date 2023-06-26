import './Mail.css';
import { useState } from 'react';
import { Formik } from 'formik';

export default function Mail() {
    const [form, setForm] = useState({});

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.title) {
            errors.title = "Required";
        }
        if (!form.message) {
            errors.message = "Required";
        }
        return errors;
    }
    function handleSubmit() {
        alert("Sent successfully!!!");
    }

    return (
        <div>
            <h1>Mail form</h1>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>To</label>
                            <input name='email' value={form.email || ""} onChange={handleChange} />
                            <p className='error'>{errors.email}</p>
                        </div>
                        <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                            <label>Title</label>
                            <input name='title' value={form.title || ""} onChange={handleChange} />
                            <p className='error'>{errors.title}</p>
                        </div>
                        <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Message</label>
                            <textarea name='message' value={form.message || ""} onChange={handleChange} />
                            <p className='error'>{errors.message}</p>
                        </div>
                        <div className='custom-input'>
                            <input type="file" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}