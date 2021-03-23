import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.tableHead}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) => (
      <tbody key={id}>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;

// class TransactionHistory extends React.Component {
//   render() {
//     const { items } = this.props;
//     return (
//       <table className={styles.transactionHistory}>
//         <thead>
//           <tr className={styles.tableHead}>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Currency</th>
//           </tr>
//         </thead>
//         {items.map(({ id, type, amount, currency }) => (
//           <tbody key={id}>
//             <tr>
//               <td>{type}</td>
//               <td>{amount}</td>
//               <td>{currency}</td>
//             </tr>
//           </tbody>
//         ))}
//       </table>
//     );
//   }
// }
