import "./index.css";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        sx={{ color: "#ffffff" }}
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        sx={{ color: "#ffffff" }}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "#ffffff" }}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "#ffffff" }}
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(
  desc: string,
  amount: number,
  balance: number,
  date: string,
  id: string
) {
  return { desc, amount, balance, date, id };
}

const transactions = [
  createData("Cupcake", 305, 3.7, "date", "id"),
  createData("Donut", 452, 25.0, "date", "id"),
  createData("Eclair", 262, 16.0, "date", "id"),
  createData("Frozen yoghurt", 159, 6.0, "date", "id"),
  createData("Gingerbread", 356, 16.0, "date", "id"),
  createData("Honeycomb", 408, 3.2, "date", "id"),
  createData("Ice cream sandwich", 237, 9.0, "date", "id"),
  createData("Jelly Bean", 375, 0.0, "date", "id"),
  createData("KitKat", 518, 26.0, "date", "id"),
  createData("Lollipop", 392, 0.2, "date", "id"),
  createData("Marshmallow", 318, 0, "date", "id"),
  createData("Nougat", 360, 19.0, "date", "id"),
  createData("Oreo", 437, 18.0, "date", "id"),
];
// .sort((a, b) => (a.date < b.date ? -1 : 1));

export const TransactionTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="table">
        <TableHead className="bg-gray-800 border-2 border-gray-900">
          <TableRow>
            <TableCell
              sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}
            >
              Description
            </TableCell>
            <TableCell
              sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}
              align="right"
            >
              Amount
            </TableCell>
            <TableCell
              sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}
              align="right"
            >
              Balance
            </TableCell>
            <TableCell
              sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}
              align="right"
            >
              Date
            </TableCell>
            <TableCell
              sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}
              align="right"
            >
              Payment id
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? transactions.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : transactions
          ).map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell
                sx={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}
                className="bg-gray-700 border-2 border-gray-900"
                component="th"
                scope="row"
              >
                {transaction.desc}
              </TableCell>
              <TableCell
                sx={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}
                className="bg-gray-700 border-2 border-gray-900"
                style={{ width: 160 }}
                align="right"
              >
                {transaction.amount}
              </TableCell>
              <TableCell
                sx={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}
                className="bg-gray-700 border-2 border-gray-900"
                style={{ width: 160 }}
                align="right"
              >
                {transaction.balance}
              </TableCell>
              <TableCell
                sx={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}
                className="bg-gray-700 border-2 border-gray-900"
                style={{ width: 160 }}
                align="right"
              >
                {transaction.date}
              </TableCell>
              <TableCell
                sx={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}
                className="bg-gray-700 border-2 border-gray-900"
                style={{ width: 160 }}
                align="right"
              >
                {transaction.id}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell
                className="bg-gray-700 border-2 border-gray-900"
                colSpan={6}
              />
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="bg-gray-800 border-2 border-gray-900">
          <TableRow>
            <TablePagination
              sx={{ color: "#ffffff" }}
              rowsPerPageOptions={[10, 20, 40, { label: "All", value: -1 }]}
              colSpan={0}
              count={transactions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
