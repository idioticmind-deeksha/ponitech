"use client";
import { Col, Container, Row } from "react-bootstrap";
import { YellowCheckIcon } from "../assets/svgIcons/svgIcon";
// import WhitepapperImg from "../../public/images/whitepaperbook.png";
import CommonButton from "../components/ui/commonButton/CommonButton";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
export default function WhitePaperOverview() {
  const [animationData, setAnimationData] = useState(null);
  const list = [
    {
      title: "DAG Architecture",
      description:
        "Ponitech uses a DAG ledger for parallel transaction processing, achieving high throughput without congestion (over 4,000 TPS in testing).",
    },
    {
      title: "Contract Automation Layer (CAL)",
      description:
        "A proprietary no-code interface that simplifies creating and managing ICO smart contracts, lowering barriers for entrepreneurs.",
    },
    {
      title: "Tokenomics",
      description:
        "PNTECH has a fixed supply of 40 billion tokens. The allocation spans presale rounds, exchange liquidity, development funds, and team reserves (with long-term vesting), all designed to foster a healthy, growth-oriented ecosystem.",
    },
    {
      title: "AI Governance",
      description:
        "An AI oversight system helps govern the network by automatically flagging suspicious activities and aiding in decision-making, adding an extra layer of security and trust for investors.",
    },
    {
      title: "Roadmap",
      description:
        "The development timeline outlines major phases, from the successful presale and testnet to the upcoming main net launch and token generation event, exchange listings, and subsequent platform upgrades (like enhanced AI features and global partnerships).",
    },
  ];
  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch('https://d1jeucgauwhk42.cloudfront.net/production/whitepaper.json');
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
    <section className="home_whitepaper" id="whitepaper">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} sm={12}>
            <h2 className="home_whitepaper_heading">
              Whitepaper Overview
            </h2>
            <p>
              In 2017, blockchain projects amassed over $6 billion—notably EOS’s
              staggering $4B—only to stumble amid insane gas fees, clogged
              networks, and security flaws. Ponitech Network’s whitepaper
              addresses these pitfalls head-on, offering a streamlined path
              forward. Our DAG architecture tackles transaction congestion by
              processing thousands of operations simultaneously.
            </p>
            <p>
              The Chain Abstraction Layer demolishes siloed ecosystems, allowing
              cross-chain ICO launches without complex bridging. No-code smart
              contracts accelerate adoption for new teams, and our roadmap
              stretches from Q2 2025’s mainnet to Q3 2027’s full-scale global
              rollout. By combining all these elements with a $500 million
              capital target, Ponitech redefines decentralized fundraising. Join
              us and secure a foothold in a system built to thrive where older
              models crumbled.
            </p>
            <ul className="home_whitepaper_list">
              {list.map((data, index: number) => (
                <li className="home_whitepaper_list_item" key={index}>
                  <div className="icon">
                    <YellowCheckIcon />
                  </div>
                  <p>
                    <span>{data.title}</span>: {data.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="home_whitepaper_cta d-none d-lg-block">
              <CommonButton title="Download the Whitepaper Now" className="btn_yellow" />
              <CommonButton title="Preview the Vision" className="btn_unique red" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="home_whitepaper_img">
              {/* <Image src={WhitepapperImg} quality={100} alt="white-paper"/> */}
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ maxWidth: 694, maxHeight: 862 } }
              />
            </div>
            <div className="home_whitepaper_cta d-block d-lg-none">
              <CommonButton title="Download the Whitepaper Now" className="btn_yellow" />
              <CommonButton title="Preview the Vision" className="btn_unique red" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};