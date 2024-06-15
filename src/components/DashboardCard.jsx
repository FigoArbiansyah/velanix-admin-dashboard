import React from "react";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import SuccessChart from "../assets/icons/success-chart.png";
import DangerChart from "../assets/icons/danger-chart.png";

const CardDashboard = ({
  isRise,
  percentNumber,
  title,
  amount,
  description,
  imageColor,
}) => {
  const isSuccess = imageColor === "success";
  const isDanger = imageColor === "danger";
  return (
    <div className="ease rounded-lg bg-white px-6 py-4 shadow transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex flex-row items-end justify-between gap-6">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="my-1 text-2xl font-semibold text-slate-600">{amount}</p>
          {description && (
            <p className="text-pretty text-sm font-light">{description}</p>
          )}
        </div>
        <div>
          {/* CHART */}
          <div className="mb-3 flex justify-center">
            <img
              src={isSuccess ? SuccessChart : DangerChart}
              alt="Chart"
              className="w-[50px]"
              style={{
                [isDanger && "transform"]: isDanger && "rotateY(180deg)",
              }}
            />
          </div>
          {/* BADGE */}
          <div
            className={`flex gap-2 rounded-full ${isRise ? "bg-green-500" : "bg-red-500"} bg-opacity-10 px-3 py-1 ${isRise ? "text-green-500" : "text-red-500"}`}
          >
            {isRise ? <RiseOutlined /> : <FallOutlined />}
            <small className="font-semibold">{percentNumber ?? 0}%</small>
          </div>
        </div>
      </div>
    </div>
  );
};

CardDashboard.propTypes = {
  isRise: PropTypes.bool,
  percentNumber: PropTypes.number,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  imageColor: PropTypes.oneOf(["danger", "success"]),
  description: PropTypes.string,
};

CardDashboard.defaultProps = {
  isRise: true,
  percentNumber: 0,
  description: "",
  imageColor: "success",
};

export default CardDashboard;
