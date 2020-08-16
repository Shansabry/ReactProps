import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  const fakeInternetData = faker.internet;
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          comment={faker.random.words()}
          timeAgo="Today at 5:00PM"
          avatar={fakeInternetData.avatar()}
          author={fakeInternetData.userName()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          comment={faker.random.words()}
          timeAgo="Today at 2:12PM"
          avatar={fakeInternetData.avatar()}
          author={fakeInternetData.userName()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          comment={faker.random.words()}
          timeAgo="Yesterday at 11:12AM"
          avatar={fakeInternetData.avatar()}
          author={fakeInternetData.userName()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
