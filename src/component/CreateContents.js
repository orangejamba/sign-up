import React, { Component } from "react";

class CreateContents extends Component {
  render() {
    console.log("CreateContents render");
    return (
      <article>
        <h2>회원가입</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.name.value,
              e.target.ID.value,
              e.target.adress.value,
              e.target.callNum.value
            );
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="회원정보"></input>
          </p>
          <p>
            <input type="text" name="name" placeholder="이름"></input>
          </p>
          <p>
            <input type="text" name="ID" placeholder="아이디"></input>
          </p>
          <p>
            <textarea name="adress" placeholder="주소"></textarea>
          </p>
          <p>
            <input type="text" name="callNum" placeholder="전화번호"></input>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContents;
