import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Sub = ({ children }) => (
  <section className={styles.subContainer}>
    {children}
  </section>
);

Sub.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sub;
