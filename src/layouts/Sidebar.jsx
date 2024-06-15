import React, { useState } from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";
import menuItems from "../helpers/sidebarMenu/admin";
import { useNavigate } from "react-router-dom";

const wrapIconWithComponent = (items) => {
  return items?.map((item) => {
    const newItem = { ...item };

    if (newItem.icon) {
      newItem.icon = <newItem.icon />;
    }

    if (newItem.children) {
      newItem.children = wrapIconWithComponent(newItem.children);
    }

    return newItem;
  });
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [stateOpenKeys, setStateOpenKeys] = useState([]);

  const onOpenChange = (openKeys) => {
    console.log(openKeys);
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1,
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(wrapIconWithComponent(menuItems));

  return (
    <Menu
      mode="inline"
      onClick={({ key, keyPath, domEvent }) => {
        keyPath?.[0].startsWith("/")
          ? navigate(keyPath?.[0])
          : navigate(`/${keyPath?.[0]}`);
      }}
      defaultSelectedKeys={["dashboard"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
        height: "100%",
        boxShadow: 0,
        border: 0,
      }}
      items={wrapIconWithComponent(menuItems)}
    />
  );
};

Sidebar.propTypes = {};

export default Sidebar;
