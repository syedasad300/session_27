import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function FormikFormWithYep() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is reqired.'),
            password: yup.string()
              .min(6, 'Password is too short.')
              .max(12, 'Password is too long.')
              .required('This field is required.')
        })
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter User Email
                    <input type="text" id="email"
                    onchange={formik.handlechange}
                    value={formik.values.email} />

                    {formik.errors.email ?
                      <div className="error">{formik.errors.email}</div>
                    : ""}

                </label>
                <br />
                <br />

                <label>
                    Enter User Password
                    <input type="password" id="password"
                    onchange={formik.handleChange}
                    value={formik.values.password} />

                    {formik.errors.password ?
                    <div className="error">{formik.errors.password}</div>
                    : ""
                    }
                    
                </label>
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default FormikFormWithYep;