import React from "react";
import { Divider, Input } from "antd";
import Sidebar from "./Sidebar";
import { customTheme } from "../helpers/utils";
import VelanixIcon from "../assets/velanix.png";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Main = ({ children }) => {
  return (
    <main
      className="flex min-h-screen flex-row gap-[30px] p-[20px] shadow-md"
      style={{
        backgroundColor: customTheme.colors.slate,
      }}
    >
      <aside className="overflow-hidden rounded-lg bg-white p-3 shadow max-md:hidden">
        <div className="flex items-center justify-center gap-3 pt-4">
          <img src={VelanixIcon} alt="Velanix Icon" />
          <h3 className="text-2xl font-semibold text-slate-500">Velanix</h3>
        </div>
        <Divider />
        <Sidebar />
      </aside>
      <section className="flex flex-1 flex-col gap-[25px]">
        <Navbar
          onChange={(e) => {
            console.log("searchbar input is changed", e?.target?.value);
          }}
        />
        <div>{children}</div>
      </section>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
