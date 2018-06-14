import React from "react";

const UserDesc = ({ user }) => {
  if(!user.id) return <div></div>

  let desc =  user.nickname + ",  手机-" + user.phone;
  return (
    <div className="user-desc">
        <div>昵称-{desc}, 账号-{user.login}, ID-{user.id}</div> 
    </div>
  );
};

export default UserDesc;