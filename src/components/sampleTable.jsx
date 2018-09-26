import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class SampleTable extends Component {
  columns = [
    {
      path: "_id",
      label: "#"
      //      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "name", label: "Name" },
    { path: "number", label: "Number" },
    {
      key: "like",
      content: record => (
        <Like liked={record.liked} onClick={() => this.props.onLike(record)} />
      )
    },
    {
      key: "delete",
      content: record => (
        <button
          onClick={() => this.props.onDelete(record)}
          className="btn btn-danger btn-sm"
        >
          Del
        </button>
      )
    }
  ];

  render() {
    const { records, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={records}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default SampleTable;
