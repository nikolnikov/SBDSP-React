import React from "react";
import PropTypes from "prop-types";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

const DataTableHead = ({ order, orderBy, onRequestSort, tableHeadData }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="ds-table__head">
        {tableHeadData.map((headCell) => (
          <TableCell
            className={`ds-table__head-th ${
              headCell.noSort ? "--no-sort" : ""
            }`}
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            direction={orderBy === headCell.id ? order : "asc"}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              tabIndex={headCell.noSort ? -1 : 0}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

DataTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]),
  orderBy: PropTypes.string.isRequired,
  tableHeadData: PropTypes.array.isRequired,
};

export default DataTableHead;
