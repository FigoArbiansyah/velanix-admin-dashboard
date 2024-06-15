import React from "react";
import { customTheme } from "../helpers/utils";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: customTheme.colors.slate }}
    >
      <div className="grid place-items-center">
        <h2 className="text-3xl font-semibold text-slate-700">
          Page Not Found
        </h2>
        <br />
        <Button
          type="primary"
          size="large"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
