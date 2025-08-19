"use client";
import { Col, Container, Row } from "react-bootstrap";
import Lottie from "lottie-react";
import CommonBgCard from "../components/ui/commonBgCard/commonBgCard";
import CommonButton from "../components/ui/commonButton/CommonButton";
import { useEffect, useState } from "react";
// import HomeLottie from '../api/data/herocoin.json';
// import HomeLottie from 'https://d1jeucgauwhk42.cloudfront.net/production/herocoin.json';
export default function HeroSection() {

    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch('https://d1jeucgauwhk42.cloudfront.net/production/herocoin.json');
                const data = await response.json();
                console.log('data--------------', data)
                setAnimationData(data);
            } catch (error) {
                console.error('Error fetching animation data:', error);
            }
        };

        fetchAnimation();
    }, []);

    // if (!animationData) return <div>Loading...</div>;
    return (
        <section className="home_hero" id="home">
            <CommonBgCard>
                <div className="home_hero_inner">
                    <div className="shooting_starts_left">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="shooting_starts_right">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Container>
                        <div className="home_hero_content">
                            <h1>Launch the Future: Unleash Your ICO with Ponitech</h1>
                            <h5>The Next-Gen Decentralized Platform Where Speed Meets Scale</h5>
                            <p>Ponitech Network is the ultimate decentralized ICO launchpad, designed for fast, hassle-free token sales. Built on a DAG-based architecture that delivers over <span>4,000 transactions per second (TPS)</span>​. Ponitech ensures lightning-fast transactions. <span>Zero gas fees</span> let you keep more of your capital​.</p>
                            <p>Our no-code smart contract tools enable anyone to launch an ICO with zero coding. With a <span>fixed 40 billion PNTECH token supply</span> fueling a growing ecosystem, Ponitech offers early investors exceptional ROI potential based on its low entry price and rising demand as the network expands.</p>
                            <div className="home_hero_cta ">
                                <CommonButton title="Ignite Your ICO Now" />
                                <CommonButton title="Discover the Revolution" className="btn_unique" />
                            </div>
                        </div>
                        <div className="home_hero_lottie">
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                style={{ width: 707 }}
                            />
                        </div>
                    </Container>
                </div>
                <div className="home_hero_story" id="about">
                    <Container>
                        <Row>
                            <Col lg={7} className="home_hero_story_left">
                                <h2>Pioneers of a New Dawn: <span>The Ponitech Story </span></h2>
                                <h6>Redefining Blockchain Fundraising, One ICO at a Time</h6>
                                <p>Ponitech was born from a vision: to eliminate the inefficiencies plaguing traditional ICOs – from high costs and gas fees to technical complexity. In 2024, a team of blockchain pioneers set out to build a faster, fairer fundraising platform. Early validation came quickly. </p>
                                <p>Ponitech’s presale strategy targeted over <span>$5 million</span> in initial funding across <span>27 presale rounds</span>, fueling rapid development. From day one, scalability was a priority: the platform hit scalability milestones, demonstrating thousands of TPS on testnet without network congestion. </p>
                                <p>Each milestone – from launching the DAG core to integrating AI governance – reinforced our mission. As Ponitech marches toward public launch and exchange listings, it remains on course to achieve ambitious targets like onboarding real-world projects, forming partnerships, and continuously refining its technology.</p>
                                <div className="home_hero_story_left_cta d-none d-lg-block">
                                    <CommonButton title="Be Part of the Change" className="secondary_btn" />
                                    <CommonButton title="Meet the Minds Behind It" className="btn_unique secondry" />
                                </div>
                            </Col>
                            <Col lg={5} className="home_hero_story_right">
                                <Row>
                                    <Col sm={6}>
                                        <div className="home_hero_story_card mission">
                                            <h6>Our Mission</h6>
                                            <p>To obliterate barriers and ignite a scalable, secure ICO ecosystem where transparency reigns and fraud fades.</p>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="home_hero_story_card vision">
                                            <h6>Our Vision</h6>
                                            <p>A world where decentralized fundraising flows effortlessly—fast, borderless, and unstoppable—powered by cross-chain unity and trust-driven governance</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="home_hero_story_left_cta d-block d-lg-none">
                            <CommonButton title="Be Part of the Change" className="secondary_btn" />
                            <CommonButton title="Meet the Minds Behind It" className="btn_unique secondry" />
                        </div>
                    </Container>
                </div>
            </CommonBgCard>
        </section>
    )
}