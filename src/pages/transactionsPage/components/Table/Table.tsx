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
import { useGlobalStore } from "../../../../globalStore/store";
import { timeConverter } from "../../../../helpers/unixTimeConverter";
import { convertAmount } from "../../../../helpers/convertAmount";
import { useNavigate } from "react-router";

interface TablePaginationActionsProps {
   count: number;
   page: number;
   rowsPerPage: number;
   onPageChange: (
      event: React.MouseEvent<HTMLButtonElement>,
      newPage: number
   ) => void;
}

const TablePaginationActions = (props: TablePaginationActionsProps) => {
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
};

export const TransactionTable = () => {
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);

   const transactions = useGlobalStore((state) => state.transactions);
   const navigate = useNavigate();
   // Avoid a layout jump when reaching the last page with empty rows.
   const emptyRows =
      page > 0
         ? Math.max(0, (1 + page) * rowsPerPage - transactions.length)
         : 0;

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
                     sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                     }}
                  >
                     Transfer Description
                  </TableCell>
                  <TableCell
                     sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                     }}
                     align="right"
                  >
                     Amount
                  </TableCell>
                  <TableCell
                     sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                     }}
                     align="right"
                  >
                     Balance
                  </TableCell>
                  <TableCell
                     sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                     }}
                     align="right"
                  >
                     Date
                  </TableCell>
                  <TableCell
                     sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                     }}
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
                  <TableRow
                     key={transaction.id}
                     onClick={() => navigate(`/transactions/${transaction.id}`)}
                     className="bg-gray-700 duration-300 hover:bg-gray-800 cursor-pointer"
                  >
                     <TableCell
                        sx={{
                           fontSize: "1rem",
                           fontWeight: 600,
                           color: "#ffffff",
                        }}
                        className="border-2 transition-all border-gray-900"
                        component="th"
                        scope="row"
                     >
                        {transaction.description}
                     </TableCell>
                     <TableCell
                        sx={{
                           fontSize: "1rem",
                           fontWeight: 600,
                           color:
                              transaction.amount > 0 ? "#22c55e" : "#ef4444",
                        }}
                        className="border-2 border-gray-900"
                        style={{ width: 160 }}
                        align="right"
                     >
                        {transaction.amount > 0
                           ? `+${convertAmount(
                                transaction.amount
                             ).toLocaleString()}`
                           : convertAmount(transaction.amount).toLocaleString()}
                        ₴
                     </TableCell>
                     <TableCell
                        sx={{
                           fontSize: "1rem",
                           fontWeight: 600,
                           color: "#ffffff",
                        }}
                        className="border-2 border-gray-900"
                        style={{ width: 160 }}
                        align="right"
                     >
                        {convertAmount(transaction.balance).toLocaleString()}₴
                     </TableCell>
                     <TableCell
                        sx={{
                           fontSize: "1rem",
                           fontWeight: 600,
                           color: "#ffffff",
                        }}
                        className="border-2 border-gray-900"
                        style={{ width: 160 }}
                        align="right"
                     >
                        {timeConverter(transaction.time).day}
                     </TableCell>
                     <TableCell
                        sx={{
                           fontSize: "1rem",
                           fontWeight: 600,
                           color: "#ffffff",
                        }}
                        className="border-2 border-gray-900"
                        style={{ width: 160 }}
                        align="right"
                     >
                        {transaction.id}
                     </TableCell>
                  </TableRow>
               ))}
               {emptyRows > 0 && (
                  <TableRow
                     style={{ height: 53 * emptyRows }}
                     className="bg-gray-700"
                  >
                     <TableCell
                        className="border-2 border-gray-900"
                        colSpan={6}
                     />
                  </TableRow>
               )}
            </TableBody>
            <TableFooter className="bg-gray-800 border-2 border-gray-900">
               <TableRow>
                  <TablePagination
                     sx={{ color: "#ffffff" }}
                     rowsPerPageOptions={[
                        10,
                        20,
                        40,
                        { label: "All", value: -1 },
                     ]}
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
