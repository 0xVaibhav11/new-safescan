import React from "react";

interface TableData {
  Owner: number;
  BlockNumber: string;
  Time: number;
  hash: string;
}

interface Props {
  data: TableData[];
}

const DataTable: React.FC<Props> = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Owner</th>
          <th>BlockNumber</th>
          <th>Time</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Owner}>
            <td>{item.Owner}</td>
            <td>{item.BlockNumber}</td>
            <td>{item.Time}</td>
            <td>{item.hash}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
