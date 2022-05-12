import React, { useState } from 'react'
import styles from './form.module.scss'
import {
  FieldAttributes,
  Formik,
  useField,
  Field,
  Form,
  FormikProps,
} from 'formik'

const emailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const WebForm = () => {
  return (
    <>
      <h2>Formularz</h2>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(data) => {
            console.log(data)
          }}
          validate={(values) => {
            const errors: Record<string, string> = {}

            if (!values.email || emailValidation.test(values.email) === false) {
              errors.email = 'Niepoprawny adres email'
              console.log('niepoprawny adres')
            }

            return errors
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form
              className={styles.form}
              autoComplete="off"
              action="http://localhost:3000/api/post-test"
              method="POST"
            >
              <div className={styles.inputContainer}>
                <Field
                  type="input"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.textField}
                  required
                />
                <label className={values.firstName && 'filled'}>Imię</label>
              </div>
              <div className={styles.inputContainer}>
                <Field
                  type="input"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.textField}
                  required
                />
                <label className={values.firstName && 'filled'}>Nazwisko</label>
              </div>
              <div className={styles.inputContainer}>
                <Field
                  type="input"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.textField}
                  required
                />
                <label className={values.email && 'filled'}>Email</label>
                {touched.email && errors.email && (
                  <div className={styles.errorMsg}>{errors.email}</div>
                )}
              </div>

              <button type="submit" className={styles.submitBtn}>
                <strong>Zatwierdź</strong>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

// const Form = () => {
//   return (
//     <div>
//       <h2>Formularz</h2>
//       <div className={styles.formContainer}>
//         <Formik
//           initialValues={{
//             firstName: '',
//             lastName: '',
//             email: '',
//           }}
//           onSubmit={(data) => {
//             console.log(data)
//           }}
//            nowe zmiany w pliku 
//           validate={(values) => {
//             const errors: Record<string, string> = {}

//             if (!values.email || emailValidation.test(values.email) === false) {
//               errors.email = 'Niepoprawny adres email'
//             }

//             return errors
//           }}
//         >
//           {({ values, handleChange, handleBlur }) => (
//             <form
//               autoComplete="off"
//               action="http://localhost:3000/api/post-test"
//               method="POST"
//             >
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.firstName}
//                 className={styles.textField}
//                 required
//                 name="firstName"
//                 label="Imię"
//                 placeholder="Imię"
//               />
//               {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 required
//                 name="lastName"
//                 label="Nazwisko"
//                 placeholder="Nazwisko"
//               />

//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 required
//                 name="email"
//                 placeholder="Email"
//               />
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 label="Waga"
//                 name="body-weight"
//                 placeholder="Waga"
//                 type="number"
//                 // InputProps={{
//                 //   startAdornment: (
//                 //     <InputAdornment position="start">kg</InputAdornment>
//                 //   ),
//                 // }}
//               />
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 name="top-3-goals"
//                 placeholder="3 główne cele treningowe:"
//                 label="3 główne cele treningowe:"
//                 multiline
//                 maxRows={4}
//               />
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 name="other-2-goals"
//                 placeholder="2 poboczne cele treningowe:"
//                 label="2 poboczne cele treningowe: "
//                 multiline
//                 maxRows={4}
//               />
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 name="limitations"
//                 placeholder="Ograniczenia, o których powinienem wiedzieć:"
//                 label="Ograniczenia, o których powinienem wiedzieć:"
//                 multiline
//                 maxRows={4}
//               />
//               <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={styles.textField}
//                 name="extraNotes"
//                 placeholder="Extra notatki"
//                 label="Extra notatki:"
//                 multiline
//                 maxRows={4}
//               />
//               <Txt variant="heading5">Upload videos</Txt>
//               <input
//                 className={styles.textField}
//                 name="video"
//                 placeholder="Wklej gdrive or dropbox adres url"
//                 label="Wklej gdrive or dropbox adres url"
//               />
//               <button type="submit" className={styles.submitBtn}>
//                 <strong>Zatwierdź</strong>
//               </button>
//             </form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   )
// }

export default WebForm
