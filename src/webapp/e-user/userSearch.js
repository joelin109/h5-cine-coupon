import React from "react";
import { CButton, CTextField } from "@/component/_base";

class UserSearch extends React.Component {
  state = {
    query: ""
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  handleQuery = () => {
    this.props.action(this.state.query);
  };

  render() {
    return (
      <div className="body-root-search">
        <CTextField
          placeholder="请输入用户账号"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <CButton text="查询" color="secondary" onClick={this.handleQuery} />
      </div>
    );
  }
}

export default UserSearch;
