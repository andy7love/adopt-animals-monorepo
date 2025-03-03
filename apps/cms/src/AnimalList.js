import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AnimalListItem from "./AnimalListItem";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  tableHead: {
    backgroundColor: "#f1f1f1",
  },
});

class AnimalList extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table>
          <TableHead className={this.props.classes.tableHead}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Breed</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Zone</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.animals.map((item) => (
              <AnimalListItem
                animal={item}
                key={item.id}
                goToEdit={this.props.goToEdit}
                deleteAnimal={this.props.deleteAnimal}
              />
            ))}
            {this.props.animals.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No animals found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(AnimalList);
