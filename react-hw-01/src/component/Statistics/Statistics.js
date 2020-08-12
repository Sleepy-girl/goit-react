import React from 'react';
// import stats from '../../data/statistical-data.json';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  console.log('title', title);
  console.log('stats', stats);

  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(stat => (
            <li key={stat.id} className={styles.item}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Statistics;
