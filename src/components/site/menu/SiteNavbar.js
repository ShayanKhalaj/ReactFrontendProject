import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./SiteNavbar.module.scss"; // وارد کردن ماژول SCSS
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/auth/UserSlice";
import Cookies from "js-cookie";

const SiteNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const logoutClickHandler = () => {
    Cookies.set("token", "");
    dispatch(setUser({ role: "user", user: null }));
  };

  return (
    <Navbar expand="lg" className={styles["custom-navbar"]}>
      {" "}
      {/* استفاده از استایل SCSS ماژول */}
      <Container>
        <Navbar.Brand href="#home" className={styles["navbar-brand"]}>
          <Image src="/logo.png" width={36} height={36} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className={styles["nav-link"]}>
              خانه
            </Link>
            <Link href="/site/categories" className={styles["nav-link"]}>
              دسته بندی ها
            </Link>
            <Link href="#about" className={styles["nav-link"]}>
              درباره ما
            </Link>
            <Link href="#contact" className={styles["nav-link"]}>
              تماس با ما
            </Link>
          </Nav>
        </Navbar.Collapse>
        {user !== null ? (
          <>
            <span style={{ marginLeft: "12px" }}>
              <p style={{ color: "white" }}>
                {user.user.firstName} {user.user.lastName} ، خوش آمدید
              </p>
            </span>
            <span>
              <button
                onClick={logoutClickHandler}
                style={{
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                }}
              >
                خروج
              </button>
            </span>
          </>
        ) : (
          <>
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                backgroundColor: "orange",
                border: 0,
                borderRadius: "8px",
              }}
              href="/auth/login"
            >
              <p style={{ padding: "4px 2px" }}>ورود/ثبت نام</p>
            </Link>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
