import { useFormik } from "formik";
import styles from "../../styles/BuyerDetails.module.css";
import * as yup from "yup";
const BuyerDetails = () => {
  const initialValues = {
    name: "",
    email: "",
    companyName: "",
    position: "",
    postalCode: "",
    address: "",
    phone: "",
    dateOfBirth: new Date(),
  };

  const validationSchema = yup.object({
    name: yup.string().required("required"),
    email: yup.string().email().required("required"),
    companyName: yup.string().required("required"),
    position: yup.string().required("required"),
    postalCode: yup.number().min(3).required("required"),
    address: yup.string().required("required"),
    phone: yup.number().required("required"),
    dateOfBirth: yup.date().required("required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (new Date().getFullYear() - parseFloat(values.dateOfBirth) >= 18) {
        console.log(true);
        formik.resetForm({
          name: "",
          email: "",
          companyName: "",
          position: "",
          postalCode: "",
          address: "",
          phone: "",
          dateOfBirth: "",
        });
      } else {
        formik.setErrors({ dateOfBirth: "age must be 18 or above" });
      }
    },
    validationSchema,
  });
  const {
    name,
    email,
    companyName,
    position,
    postalCode,
    address,
    phone,
    dateOfBirth,
  } = formik.values;
  return (
    <div className={styles.BuyerDetailsContainer}>
      <div className={styles.BuyerDetailsLeft}>
        <h2 className={styles.title}>Buyer details</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.BuyerInfoFields}>
            <div className={styles.fieldContainer}>
              <div className={styles.field}>
                <label htmlFor="CaptureName">Capture Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <p>{formik.errors.name}</p>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="Workemail">Work email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p>{formik.errors.email}</p>
                )}
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <div className={styles.field}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="companyName"
                  id="company"
                  value={companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.companyName && formik.touched.companyName && (
                  <p>{formik.errors.companyName}</p>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="position">Title/ position</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={position}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.position && formik.touched.position && (
                  <p>{formik.errors.position}</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.BuyerDetailsTerms}>
            <h2>Who is on your team</h2>
            <p>
              You need at least 2 more people to sign up a team. Ability to
              purchase at least 2 more seats but no more than 20 seats.
            </p>
          </div>
          <div className={styles.additionalInfoContainer}>
            <h3>Provide some additional info </h3>
            <div className={styles.additionalInfoFields}>
              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    value={postalCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.postalCode && formik.touched.postalCode && (
                    <p>{formik.errors.postalCode}</p>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.address && formik.touched.address && (
                    <p>{formik.errors.address}</p>
                  )}
                </div>
              </div>

              <div className={styles.fieldContainer}>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p>{formik.errors.phone}</p>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="dateOfBirth">Date of birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
                    <p>{formik.errors.dateOfBirth}</p>
                  )}
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={styles.BuyerDetailsRight}>
        <img src="./bsInsiderLog.png" alt="nicklpass" />
        <h3>NICKLpass + Business Insider</h3>
      </div>
    </div>
  );
};

export default BuyerDetails;
