import React from "react";

const Eye = props => (
  <svg width={22} height={20} fill="none" {...props}>
    <path
      d="M21 12.819c-.202-.217-4.343-6.505-10-6.722-3.636-.109-6.667 2.819-10 6.722.202.217 4.343 5.855 10 6.18.101 0-.101 0 0 0 3.333 0 6.869-2.169 10-6.18zm-10 4.987c-3.333-.108-6.162-2.494-7.677-4.12-.404-.434-.404-1.192 0-1.626 2.525-2.82 5.05-4.77 7.778-4.662 3.333.108 6.263 2.927 7.778 4.662.404.434.404 1.192 0 1.626-2.728 2.71-5.152 4.229-7.879 4.12z"
      fill="#434343"
    />
    <path
      d="M11 15.095c1.34 0 2.425-1.165 2.425-2.602 0-1.437-1.086-2.602-2.425-2.602-1.338 0-2.424 1.165-2.424 2.602 0 1.437 1.086 2.602 2.424 2.602z"
      fill="#434343"
    />
    <path
      d="M11 1v2.602M6.05 1.867l.809 2.385M1.605 4.793l1.718 1.843M16.05 1.867l-.908 2.385M20.394 4.793l-1.717 1.843"
      stroke="#000"
      strokeMiterlimit={10}
    />
  </svg>
);

export default Eye;
