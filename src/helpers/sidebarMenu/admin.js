import { AppstoreOutlined, HomeFilled } from "@ant-design/icons";

const menuItems = [
  {
    key: "dashboard",
    icon: HomeFilled,
    label: "Dashboard",
    path: "dashboard",
  },
  {
    key: "components",
    icon: AppstoreOutlined,
    label: "Components",
    children: [
      {
        key: "form",
        label: "Form",
        path: "form",
      },
      {
        key: "tables",
        label: "Table",
        children: [
          {
            key: "simple-table",
            label: "Simple Table",
            path: "simple-table",
          },
          {
            key: "data-table",
            label: "Data Table",
            path: "data-table",
          },
        ],
      },
    ],
  },
];

export default menuItems;
