import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Loading } from '../';

const CardList = ({ loading, list }) => {
  const renderCardList = (() => {
    if (loading) return <Loading />

    const listMapping = list.map(({ id, created_at: createdAt, title, content, updated_at: updatedAt }) => (
      <div key={id} className={styles.cardListItem}>
        <div className={styles.cardListItemHeader}>{createdAt}</div>

        <div className={styles.cardListItemContent}>
          <div className={styles.cardListItemContentTopic}>
            {title}
          </div>
          <div className={styles.cardListItemContentMessage}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className={styles.cardListItemContentTime}>{updatedAt}</div>
        </div>

        <div className={styles.cardListItemFooter}>
          <div className={styles.cardListItemFooterText}>Register Now</div>
          <div className={styles.cardListItemFooterRegister} />
        </div>
      </div>
    ));
    return listMapping;
  })();

  return (
    <div className={styles.cardList}>
      {renderCardList}
    </div>
  );
};

CardList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
};

export default CardList;
