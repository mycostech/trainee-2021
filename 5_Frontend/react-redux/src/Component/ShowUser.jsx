import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../Actions/users.action'
import TablePaginationActions from './TablePaginationActions'
import Modal from './Modal'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
    },
});

const ShowUser = () => {
    const users = useSelector(state => state.users && state.users.userList ? state.users.userList : [])
    const dispatch = useDispatch()

    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [showModal, setShowModal] = React.useState(false)
    const [selected, setSelected] = React.useState({})

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const onUpdateClick = (id, title, body) => {
        setSelected({id, title, body})
        openModal()
    }

    return (
        <div>
            <h1>Show User</h1>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="custom pagination table">
                        <TableBody>
                        {(rowsPerPage > 0
                            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : users
                        ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.title}
                                </TableCell>
                                <TableCell style={{ width: 200 }} align="right">
                                    {row.body}
                                </TableCell>
                                <TableCell style={{ width: 200 }}>
                                    <button onClick={() => onUpdateClick(row.id, row.title, row.body)}>Update</button>
                                    &nbsp;
                                    <button>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                        <TableFooter>
                        <TableRow>
                            <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
            <Modal isShowModal={showModal} openModal={openModal} closeModal={closeModal} selected={selected} />
        </div>
    )
}

export default ShowUser