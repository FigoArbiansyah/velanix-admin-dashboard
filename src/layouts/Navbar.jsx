import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import PropTypes from "prop-types";

const Navbar = ({ onChange }) => {
  return (
    <header className="grid grid-cols-7 gap-10 rounded-lg bg-white p-3 px-5 shadow">
      <div className="col-span-4 flex items-center gap-3">
        <Input
          size="large"
          placeholder="Search Here"
          prefix={<SearchOutlined className="scale-110" />}
          style={{
            outline: 0,
            border: 0,
            paddingLeft: 10,
          }}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="col-span-3 flex items-center justify-end gap-3">
        <div className="max-md:hidden">
          <p className="mb-0.5 text-base font-semibold text-slate-600">
            Figo Arbiansyah
          </p>
          <div className="flex items-center justify-end gap-1">
            <div className="size-2.5 rounded-full bg-green-400" />
            <p className="text-sm text-slate-400">Online</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="User Image"
          className="ease aspect-square size-12 cursor-pointer rounded-full border object-cover transition-all duration-300 hover:border-blue-500"
        />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Navbar;
