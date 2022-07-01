import React, { Component } from "react";

class UpdateContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      name: this.props.data.name,
      ID: this.props.data.ID,
      adress: this.props.data.adress,
      callNum: this.props.data.callNum,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  //메소드도 객체를 만들 수 있다.
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("UpdateContents render");
    return (
      <article>
        <h2>회원정보수정</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.title,
              this.state.id,
              this.state.name,
              this.state.ID,
              this.state.adress,
              this.state.callNum
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={this.state.name}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="adress"
              placeholder="주소"
              value={this.state.adress}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input
              type="text"
              name="callNum"
              placeholder="전화번호"
              value={this.state.callNum}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContents;
