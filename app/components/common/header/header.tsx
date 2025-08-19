"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Offcanvas, Row } from "react-bootstrap";
import HeaderMenu from "./headerMenu";
import CommonButton from "../../ui/commonButton/CommonButton";
import Logo from '../../../../public/images/logo.svg';
import './header.scss';
import Image from "next/image";
import { CopyIcon, LogoutIcon } from "@/app/assets/svgIcons/svgIcon";
import Lottie from "lottie-react";
import HeaderLink from "./customLink";
export default function Header({ logoClick }: { logoClick?: () => void; }) {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const tl = gsap.timeline();
    const [animationData, setAnimationData] = useState(null);
    const handleResize = () => {
        if (window.innerWidth < 1280) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useGSAP(() => {
        if (window.innerWidth > 1279) {
            tl.from(".header_left a", {
                y: -40,
                duration: .3,
                opacity: 0,
                ease: 'power2.out',
            });
            gsap.from(".header_right > .common_btn, .header_right > div, .header_menu > li", {
                y: -40,
                duration: .3,
                opacity: 0,
                stagger: .1,
                ease: 'power2.out',
            });
        }
    });
    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch('https://d1jeucgauwhk42.cloudfront.net/production/ponitechlogo.json');
                const data = await response.json();
                console.log('data--------------', data)
                setAnimationData(data);
            } catch (error) {
                console.error('Error fetching animation data:', error);
            }
        };
        fetchAnimation();
    }, []);
    return (
        <header className={isScrolled ? 'header tinny' : 'header'}>
            <Container>
                <Row className="header_row">
                    <Col xs={5} lg={3}>
                        <div data-animate className="header_left">
                        <HeaderLink
                                href="/#home"
                                onClick={logoClick}
                            >
                                <Lottie
                                    animationData={animationData}
                                    loop={true}
                                    style={{ maxWidth: 70 }}
                                />
                                <Image src={Logo} width={144} height={30} quality={100} alt="Logo" />
                            </HeaderLink>
                        </div>
                    </Col>
                    <Col xs={7} lg={9} className="header_mid_outer ps-0">
                        {/* <div className="header_mid"> */}
                        <div className="header_right">
                            {menu ? (
                                <HeaderMenu
                                    onClick={() => {
                                        setShow(!show);
                                    }}
                                />
                            ) : (
                                <Offcanvas
                                    show={show}
                                    onHide={() => {
                                        setShow(false);
                                    }}
                                    placement="end"
                                    className="header_canvas">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <Image src={Logo} width={201} height={51} quality={100} alt="Logo" />
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <HeaderMenu
                                            className="header_menu_canvas"
                                            onClick={() => {
                                                setShow(!show);
                                            }}
                                        />
                                    </Offcanvas.Body>
                                </Offcanvas>
                            )}
                            {true ?
                                <CommonButton title="Connect Wallet" /> :
                                <Dropdown className="wallet-drop">
                                    <Dropdown.Toggle id="wallet-drop" className="common_btn btn-secondry">
                                        5x764345....7645
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align={"end"}>
                                        <Dropdown.Item as={"button"}>5x764345....7645  <CopyIcon /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" as={"button"}>Disconnect Wallet <LogoutIcon /></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                            {menu ? (
                                ""
                            ) : (
                                <div
                                    className="header_right_toggler"
                                    onClick={() => {
                                        setShow(true);
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="header_right_toggler_btn"
                                    ></button>
                                </div>
                            )}
                        </div>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </header>
    );
}