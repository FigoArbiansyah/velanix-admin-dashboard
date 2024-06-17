import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div className={"rounded-lg bg-white p-4 shadow" + className}>
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;
