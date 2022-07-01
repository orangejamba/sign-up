import React, { Component } from "react";

class ReadContents extends Component {
  render() {
    console.log("Contents render");
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        <br></br>
        이름: {this.props.name}
        <br></br>
        아이디: {this.props.ID}
        <br></br>
        주소: {this.props.adress}
        <br></br>
        전화번호: {this.props.callNum}
      </article>
    );
  }
}

export default ReadContents;
