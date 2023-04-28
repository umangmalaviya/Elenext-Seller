import { useFormik } from 'formik';

const Demo = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      mobile: '',
    },
    validate: (values) => {
      const errors = {};
      // perform validation logic and add error messages to the `errors` object
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
      if (!values.mobile) {
        errors.mobile = 'Mobile is required';
      } else if (isNaN(Number(values.mobile))) {
        errors.mobile = 'Mobile number must be a number';
      }
      return errors;
    },
    onSubmit: (values) => {
      // handle form submission logic
      console.log(values);
      // redirect to another page
      window.location.href = '/Login';
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile ? (
          <div>{formik.errors.mobile}</div>
        ) : null}
      </div>
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
};

export default Demo;