import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from './SiteNavbar.module.scss'; // وارد کردن ماژول SCSS
import Image from "next/image";
import Link from "next/link";

const SiteNavbar = () => {
  return (
    <Navbar expand="lg" className={styles['custom-navbar']}> {/* استفاده از استایل SCSS ماژول */}
      <Container>
        <Navbar.Brand href="#home" className={styles['navbar-brand']}>
          <Image src="/logo.png" width={36} height={36}alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className={styles['nav-link']}>خانه</Link>
            <Link href="/site/categories" className={styles['nav-link']}>دسته بندی ها</Link>
            <Link href="#about" className={styles['nav-link']}>درباره ما</Link>
            <Link href="#contact" className={styles['nav-link']}>تماس با ما</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
