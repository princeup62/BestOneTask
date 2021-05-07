import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import AddEmployeeModal from "../component/AddEmployee";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type employee = {
  name: string;
  email: string;
  position: string;
};

type employees = employee[];

export default function BasicTable() {
  const classes = useStyles();
  const [employees, setEmployees] = useState<employees>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetch("https://60952c1c94009e00176b691c.mockapi.io/ems/api/v1/employees")
      .then((response) => response.json())
      .then((resp) => setEmployees(resp));
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onAddEmployeeSubmit = (data: employee) => {
    console.log("asdfff ", data);
    setShowAddModal(false);
    fetch("https://60952c1c94009e00176b691c.mockapi.io/ems/api/v1/employees", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data", data);
        if (data) {
          alert("Successfully added an employee");
        }
      });
  };

  return (
    <div>
      <div className=" my-5 ml-4 mv-1">
        <h4>Employees</h4>
        <button className="btn btn-dark" onClick={() => setShowAddModal(true)}>
          + New
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.length ? (
              employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                  </TableRow>
                ))
            ) : (
              <p>There are no employees.</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <AddEmployeeModal visible={showAddModal} onSubmit={onAddEmployeeSubmit} />
    </div>
  );
}
