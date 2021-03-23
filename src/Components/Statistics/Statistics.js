import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={styles.item}
          style={{ backgroundColor: randColor() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;

// class Statistics extends React.Component {
//   render() {
//     const statisticalData = this.props;
//     return (
//       <section className={styles.statistics}>
//         {statisticalData.title && (
//           <h2 className={styles.title}>{statisticalData.title}</h2>
//         )}
//         <ul className={styles.statList}>
//           {statisticalData.stats.map(({ id, label, percentage }) => (
//             <li
//               key={id}
//               className={styles.item}
//               style={{ backgroundColor: randColor() }}
//             >
//               <span className={styles.label}>{label}</span>
//               <span className={styles.percentage}>{percentage}</span>
//             </li>
//           ))}
//         </ul>
//       </section>
//     );
//   }
// }
