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
import { capitalizeString } from "../../../../helpers/capitalizeString";
import { Transaction } from "../../../../types/globalTypes";

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
         ? Math.max(0, (1 + page) * rowsPerPage - transactions!.length)
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
      <div>
         <div className="w-full border-2 border-gray-900">
            <div className="bg-gray-800 flex justify-between w-full">
               <p className="w-3/12 text-white text-2xl font-bold p-3">
                  Transfer Description
               </p>
               <p className="w-2/12 text-white text-2xl font-bold p-3">
                  Category
               </p>
               <p className="w-2/12 text-white text-2xl font-bold p-3">
                  Amount
               </p>
               <p className="w-2/12 text-white text-2xl font-bold p-3">
                  Balance
               </p>
               <p className="w-1/12 text-white text-2xl font-bold p-3">Date</p>
               <p className="w-2/12 text-white text-2xl font-bold p-3">
                  Payment id
               </p>
            </div>
            <ul>
               {(rowsPerPage > 0
                  ? transactions!.slice(
                       page * rowsPerPage,
                       page * rowsPerPage + rowsPerPage
                    )
                  : transactions!
               ).map((transaction: Transaction) => (
                  <li
                     key={transaction.id}
                     onClick={() => navigate(`/transactions/${transaction.id}`)}
                     className="bg-gray-700 duration-300 hover:bg-gray-800 cursor-pointer flex justify-between"
                  >
                     <div className="border-2 border-gray-900 w-3/12 text-white text-lg font-semibold p-3 overflow-hidden whitespace-nowrap">
                        {transaction.description}
                     </div>
                     <div className="border-2 border-gray-900 w-2/12 text-white text-lg font-semibold p-3">
                        {capitalizeString(transaction.category!)}
                     </div>
                     <div
                        className={`border-2 border-gray-900 w-2/12 ${
                           transaction.amount > 0
                              ? "text-green-500"
                              : "text-red-500"
                        }
                         text-lg font-semibold p-3`}
                     >
                        {transaction.amount > 0
                           ? `+${convertAmount(
                                transaction.amount
                             ).toLocaleString()}`
                           : convertAmount(transaction.amount).toLocaleString()}
                        ₴
                     </div>
                     <div className="border-2 border-gray-900 w-2/12 text-white text-lg font-semibold p-3">
                        {convertAmount(transaction.balance).toLocaleString()}₴
                     </div>
                     <div className="border-2 border-gray-900 w-1/12 text-white text-lg font-semibold p-3">
                        {timeConverter(transaction.time).day}
                     </div>
                     <div className="border-2 border-gray-900 w-2/12 text-white text-lg font-semibold p-3 overflow-hidden whitespace-nowrap">
                        {transaction.id}
                     </div>
                  </li>
               ))}
               {emptyRows > 0 && (
                  <div
                     style={{ height: 54.2 * emptyRows }}
                     className="bg-gray-700 border-2 border-gray-900"
                  ></div>
               )}
            </ul>
            <div className="bg-gray-800 border-2 border-gray-900 w-full">
               <div>
                  <TablePagination
                     sx={{ color: "#ffffff", border: "none" }}
                     rowsPerPageOptions={[
                        10,
                        20,
                        40,
                        { label: "All", value: -1 },
                     ]}
                     colSpan={0}
                     count={transactions!.length}
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
               </div>
            </div>
         </div>
      </div>
   );
};
