import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "../components/ui/commonButton/CommonButton";

const ThePathToGlory = () => {
  const timelineData = [
    {
      title: "Project Foundation & Mainnet Kickoff",
      description:
        "MVP launches, DAG mining begins, first ICOs go live—your starting line.",
      date: "Q2 2025",
      color: "green",
    },
    {
      title: "Governance and Expansion",
      description:
        "PNTECH holders vote, more chains integrate—power in your hands.",
      date: "Q4 2025",
      color: "cyan",
    },
    {
      title: "Miners and NFTs",
      description: "Miner X10/X30/X100 sales, NFT ICOs debut—stake your claim.",
      date: "Q1 2026",
      color: "yellow",
    },
    {
      title: "Cross-Chain & No-Code Mastery",
      description:
        "CAL unites chains, no-code builder rolls out—scale without limits.",
      date: "Q3 2026",
      color: "blue",
    },
    {
      title: "Crypto Cards & Enterprise",
      description:
        "PNTECH-powered cards, global enterprise solutions—real-world impact.",
      date: "Q2 2027",
      color: "red",
    },
  ];
  return (
    <section className="home_the_path_to_glory" id="roadmap">
      <Container>
        <div className="home_the_path_to_glory_head">
          <h2>The Path to Glory: Ponitech’s Master Plan Unfolds </h2>
          <h5>
            From Mainnet to Global Domination—
            <span className="red">Your Window is Closing</span>
          </h5>
          <p>
            Ponitech Network’s roadmap is no mere timeline—it’s a calculated
            march from Q2 2025’s mainnet launch to Q3 2027’s global adoption,
            delivering a <span>$500M ecosystem</span> that redefines ICOs.
            Picture this: DAG-powered launches in 2025, NFT-integrated
            fundraising by Q1 2026, and crypto cards powering real-world spends
            by Q2 2027. Every milestone—mainnet, miner sales, cross-chain unity,
            DeFi expansion—is a step toward a world where startups soar and
            investors thrive. The clock’s running: Q2 2025 is months away, and
            pre-sale slots are vanishing. <span>Join now</span>, or watch from
            the sidelines as Ponitech reshapes decentralized finance.
          </p>
          <div className="home_the_path_to_glory_cta">
            <CommonButton title="Join the Journey Today" className="secondary_btn"/>
            <CommonButton title="Track the Timeline" className="btn_unique green" />
          </div>
        </div>
        <div className="home_the_path_to_glory_content">
          <Row className="justify-content-center timeline_container">
            {timelineData.map((item, index:number) => (
             <Col xxl lg={4}sm={6} key={index} className="d-flex">
             <div className="timeline_body">
               <div className="timeline_card">
                 <div className="timeline_content">
                   <h6 className={`${item.title === "Miners and NFTs" ? "title_break" : ""}`}>{item.title}</h6>
                   <p>{item.description}</p>
                 </div>
               </div>
               <div className="timeline_footer">
                 <h4 className="timeline_date">{item.date}</h4>
                 <div className={`timeline_bar ${item.color}`}></div>
               </div>
             </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ThePathToGlory;
