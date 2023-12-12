import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import avatar from "./../assets/images/avatar.jpg";
import { useOutsideClick } from "./OutsideClick";
import { useNavigate } from "react-router-dom";

const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #a6a6a6;
  padding: 0.3rem 0.5rem;
  align-items: center;
  border: 1px solid;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
`;

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  color: #ffffff;
  align-items: center;
`;

const SidebarMenu = styled.div<{ close: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: #6f00ff;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
  padding: 0 0.5rem;
  z-index: 99999;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 60px;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
  }
`;

const Sidebar = (onHandleLogOut: any) => {
  const nav = useNavigate();
  const [close, setClose] = useState(false);
  const showSidebar = () => {
    setClose(!close);
  };

  const ref = useOutsideClick(() => {
    setClose(false);
  });

  const logOutHandle = () => {
    onHandleLogOut.onHandleLogOut();
    nav("/login");
  };

  return (
    <>
      <Navbar className="navbar fixed-top navbar-light bg-body-tertiary">
        <span className="navbar-block">
          <MenuIconOpen to="#" onClick={showSidebar}>
            <FaIcons.FaBars />
          </MenuIconOpen>
          <span className="action-block">
            <span>
              <FaIcons.FaCommentAlt />
            </span>
            <span>
              <FaIcons.FaBell />
            </span>
            <Link
              to="/profile"
              unstable_viewTransition
              preventScrollReset={true}
            >
              <span className="avatar">
                <img src={avatar} alt="avatar" />
              </span>
            </Link>
          </span>
        </span>
      </Navbar>

      <SidebarMenu close={close} ref={ref}>
        <span className="app-name-block">
          <span className="app-name">HOUSINGLINX</span>
          <MenuIconClose to="#" onClick={showSidebar}>
            <FaIcons.FaTimes />
          </MenuIconClose>
        </span>

        <span className="nav-links">
          {SidebarData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks to={item.path} onClick={showSidebar}>
                  {item.icon}
                  <span className="link-name">{item.title}</span>
                </MenuItemLinks>
              </MenuItems>
            );
          })}
        </span>

        <span className="logout" onClick={logOutHandle}>
          <FaIcons.FaSignOutAlt /> <span> Logout </span>
        </span>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
