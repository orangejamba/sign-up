import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Control render");
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            회원가입
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("update");
            }.bind(this)}
          >
            회원정보수정
          </a>
        </li>
        <li>
          <input
            type="button"
            value="회원탈퇴"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("회원탈퇴");
            }.bind(this)}
          ></input>
        </li>
      </ul>
    );
  }
}

export default Subject;
