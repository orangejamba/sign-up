import React, { Component } from "react";

class ReadContents extends Component {
  render() {
    console.log("Contents render");
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        이름: {this.props.name}
        <hr></hr>
        아이디: {this.props.ID}
        <hr></hr>
        주소: {this.props.adress}
        <hr></hr>
        전화번호: {this.props.callNum}
      </article>
    );
  }
}

export default ReadContents;
