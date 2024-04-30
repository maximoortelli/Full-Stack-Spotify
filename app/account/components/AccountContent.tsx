/* eslint-disable @next/next/no-img-element */
"use client";


const AccountContent = () => {


  return (
    <div className="flex items-center justify-start pl-8">
        <div className="my-1">
          <img src="/images/like.png" alt="Avatar" style={{ width: 100, borderRadius: '50%' }} />
          <h1 className="my-3">User Name: My Profile.</h1>
          <p className="my-3">Email: Jhon@gmail.com</p>
          <p className="my-3">Country: United States</p>
          <p className="my-3">Phone Number:</p>
        </div>
    </div>
  );
};

export default AccountContent;
