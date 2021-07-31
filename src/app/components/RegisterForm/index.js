import React from 'react';
import styles from './index.module.scss';

const RegisterForm = (props) => {
  return (
    <div className={styles.registerForm}>
      <div className={styles.registerFormContainer}>
        <div className={styles.registerFormContainerOuter}>
          <div className={styles.registerFormContainerTitle}>Register for a Webinar now</div>
          <div className={styles.registerFormContainerDes}>
            Please fill in the form below and you will be contacted by one of our professional
            business experts.
          </div>
          <div className={styles.registerFormContainerForm}>
            {/** topic select option */}
            <div className={styles.registerFormContainerFormInputArea}>
              Topic
              <div className={styles.formSelectContainer}>
                <select className={styles.formSelectMain}>
                  <option value="1">
                    23/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading
                  </option>
                  <option value="2">
                    24/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading
                  </option>
                  <option value="3">
                    25/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading
                  </option>
                </select>
                <i className={styles.formSelectArrow} />
              </div>
            </div>

            {/** input */}
            <div className={styles.registerFormContainerFormInputArea}>
              First Name
              <input type="text" className={styles.formInputText} />
            </div>
            <div className={styles.registerFormContainerFormInputArea}>
              Last Name
              <input type="text" className={styles.formInputText} />
            </div>
            <div className={styles.registerFormContainerFormInputArea}>
              Email
              <input type="text" className={styles.formInputText} />
            </div>
            <div className={styles.registerFormContainerFormInputArea}>
              Phone
              <div className={styles.formPhoneContainer}>
                <div className={styles.formPhoneAreaCodeContainer}>
                  <select className={styles.formPhoneAreaCodeSelectMain}>
                    <option value="+886">+886</option>
                    <option value="+88">+88</option>
                    <option value="+420">+420</option>
                  </select>
                  <i className={styles.formSelectArrow} />
                </div>
                <input type="text" className={styles.formPhoneInputText} />
              </div>
            </div>
            <div className={styles.registerFormContainerFormInputArea}>
              Mobile Authentication
              <div className={styles.formPhoneContainer}>
                <input type="text" className={styles.formMobileLeftInput} value="Get Code" />
                <input type="text" className={styles.formPhoneInputText} />
              </div>
            </div>

            {/** register submit */}
            <div className={styles.registerFormContainerFormInputArea}>
              <div className={styles.formRegisterButtonDisabled}>Register</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
