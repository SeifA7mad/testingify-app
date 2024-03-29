import { useTable } from 'react-table';

const ResultsTable = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  return (
    <table style={{ margin: '2rem auto' }} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
              key={column.id}
                style={{
                  borderBottom: 'solid 3px red',
                  color: 'black',
                  fontFamily: 'sans-serif',
                  fontSize: '1.1rem',
                  maxWidth: '10rem'
                }}
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    key={cell.id}
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      fontFamily: 'sans-serif',
                      fontSize: '1.2rem',
                      overflowWrap: 'break-word',
                      textAlign: 'center',
                      minWidth: '6rem',
                      maxWidth: '20rem'
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
