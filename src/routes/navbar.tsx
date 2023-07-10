import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuItem, NavbarItem, Paths } from "~/types";

function getItem({ key, label, to, children, icon }: NavbarItem): MenuItem {
  return {
    key,
    icon,
    children,
    label: to ? <Link to={to}>{label}</Link> : label,
  } as MenuItem;
}

const navConfig: MenuItem[] = [
  getItem({
    key: Paths.Home,
    label: "Trang chủ",
    to: Paths.Home,
    icon: <DesktopOutlined />,
  }),
  getItem({
    key: "",
    label: "Quản lý người dùng",
    icon: <UserOutlined />,
    children: [
      getItem({
        key: Paths.AddUser,
        label: "Thêm người dùng",
        to: Paths.AddUser,
      }),
    ],
  }),
];

export default navConfig;
