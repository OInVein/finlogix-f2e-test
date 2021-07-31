import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Main = ({ children }) => (
  <div className={styles.mainContainer}>
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
