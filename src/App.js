// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import TOC from "./component/TOC";
import ReadContents from "./component/ReadContents";
import Subject from "./component/Subject";
import Control from "./component/Control";
import CreateContents from "./component/CreateContents";
import UpdateContents from "./component/UpdateContents";

class App extends Component {
  //생성자 추가
  constructor(props) {
    super(props);
    this.max_contents_id = 2;
    //this는 App
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "JB WEB", sub: "World JB Web" },
      welcome: { title: "Welcome", desc: "Hello, JB React!!" },
      contents: [
        {
          id: 1,
          title: "회원정보",
          name: "백종빈",
          ID: "qorwhdqls123",
          adress: "중곡동",
          callNum: "010-0000-0000",
        },
      ],
    };
  }
  //getReadContents start
  getReadContents() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  //getReadContents end

  //getContents start

  getContents() {
    let _title,
      _desc,
      _name,
      _ID,
      _adress,
      _callNum = null,
      _article;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _name = this.state.welcome.name;
      _ID = this.state.welcome.ID;
      _adress = this.state.welcome.adress;
      _callNum = this.state.welcome.callNum;
      _article = (
        <ReadContents
          title={_title}
          desc={_desc}
          name={_name}
          ID={_ID}
          adress={_adress}
          callNum={_callNum}
        />
      );
    } else if (this.state.mode === "read") {
      let _content = this.getReadContents();
      _article = (
        <ReadContents
          title={_content.title}
          desc={_content.desc}
          name={_content.name}
          ID={_content.ID}
          adress={_content.adress}
          callNum={_content.callNum}
        />
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContents
          onSubmit={function (_title, _name, _ID, _adress, _callNum) {
            // console.log(_title, _desc);
            //객체형태로 배열에 추가해줘야한다.

            this.max_contents_id = this.max_contents_id + 1;

            // push
            // 원본 훼손
            // this.state.contents.push({
            //   id: this.max_contents_id,
            //   title: _title,
            //   desc: _desc,
            // });

            // concat
            // 원본데이터를 복사해와서 추가
            // let _contents = this.state.contents.concat({
            //   id: this.max_contents_id,
            //   title: _title,
            //   desc: _desc,
            // });

            let _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_contents_id,
              title: _title,
              name: _name,
              ID: _ID,
              adress: _adress,
              callNum: _callNum,
            });

            this.setState({
              // contents: this.state.contents,
              mode: "read",
              contents: _contents,
              selected_content_id: this.max_contents_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadContents();
      _article = (
        <UpdateContents
          data={_content}
          onSubmit={function (_id, _title, _name, _ID, _adress, _callNum) {
            let _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id == _id) {
                _contents[i] = {
                  id: _id,
                  title: _title,
                  name: _name,
                  ID: _ID,
                  adress: _adress,
                  callNum: _callNum,
                };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        />
      );
    }
    return _article;
  }

  //getContents end

  render() {
    console.log("App render");

    return (
      // 리엑트에서 리턴구문안에 쓸때
      // 하나의 태그로만 감싸야한다
      <div>
        {/* <header>
          <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.setState({mode : 'welcome'});
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            // 상위 컨퍼넌트에서 하위 컨퍼넌트의 정보를 전달할때
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />

        {/* data는 임의로 정의해준 변수 */}
        <TOC
          data={this.state.contents}
          onChange={function (id) {
            // 하위 컨퍼넌트에서 상위 컨퍼넌트의 정보를 전달할때
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
        />

        <Control
          onChangeMode={function (_mode) {
            if (_mode === "회원탈퇴") {
              if (window.confirm("really?")) {
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents,
                });
                alert("탈퇴완료!");
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        />
        {this.getContents()}
        {/* <ReadContents title={_title} desc={_desc} /> */}
      </div>
    );
  }
}

//외부에서 쓸 수 있게 권한 허용
export default App;

//렌더링이 왜 이렇게 되는 이유 잘 알고 있기
