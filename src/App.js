import React, { Component } from "react";
import SampleForm from "./components/sampleForm";
import SampleTable from "./components/sampleTable";
import BigText from "./components/bigText";
import SampleJumbo from "./components/sampleJumbo";
import SampleFooter from "./components/sampleFooter";
import "./App.css";

class App extends Component {
  state = {
    records: [
      { _id: 1, name: "Ali", number: "313" },
      { _id: 2, name: "Mama", number: "321" },
      { _id: 3, name: "Baba", number: "123" }
    ],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "name", order: "asc" }
  };

  handleAdd = data => {
    const { records } = this.state;
    const id = records.length + 1;
    const newRecords = [
      { _id: id, name: data.name, number: data.number },
      ...records
    ];
    this.setState({ records: newRecords });
  };

  handleLike = () => {
    alert("Like");
  };

  handleDelete = record => {
    const { records } = this.state;
    console.log(record, records);
    const newRecords = records.filter(r => r._id !== record._id);
    this.setState({ records: newRecords });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { records, sortColumn } = this.state;

    return (
      <React.Fragment>
        <SampleJumbo />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3>Form</h3>
              <SampleForm onSubmit={this.handleAdd} />
            </div>
            <div className="col-sm-4">
              <h3>Table</h3>
              <SampleTable
                records={records}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
            </div>
            <div className="col-sm-4">
              <h3>Text</h3>
              <BigText />
            </div>
          </div>
        </div>
        <SampleFooter />
      </React.Fragment>
    );
  }
}

export default App;
