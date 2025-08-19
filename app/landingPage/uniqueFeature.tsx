import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { CrossChainIcon, DagPowersIcon, EcoFriendlyIcon, GasFreeIcon, NoCodeIcon } from "../assets/svgIcons/svgIcon";
import CommonButton from "../components/ui/commonButton/CommonButton";

const features = [
  {
    title: "DAG-Powered Scalability",
    description:
      <>Break free from blockchain&apos;s bottlenecks. Our Directed Acyclic Graph (DAG) processes <span className="green">thousands of transactions per second </span>in parallel—no more Ethereum-style 15 TPS chokeholds or CryptoKitties chaos. Instant finality means your ICO launches without delay, every time.</>,
    icon: <DagPowersIcon />,
  },
  {
    title: "Cross-Chain Interoperability",
    description:
      <>One platform, <span className="blue">infinite reach.</span> Our Chain Abstraction Layer (CAL) unites Ethereum, Solana, BNB Chain, and beyond—no bridges, no hassle. Launch your ICO across multiple ecosystems simultaneously, tapping liquidity from every corner of the blockchain universe. </>,
    icon: <CrossChainIcon />,
  },
  {
    title: "No-Code Smart Contracts",
    description:
      <>Code? Optional. Our intuitive platform lets anyone—dreamers, not just developers—craft secure ICO smart contracts with <span className="orange">zero Solidity skills. </span>Say goodbye to Parity’s $150M lockup nightmares—launch fast, launch safe, launch yours.</>,
    icon: <NoCodeIcon />
  },
  {
    title: "Gas-Free Transactions",
    description:
      <>Fees? History. Our DAG-based lightweight validation slashes costs to <span className="yellow">near-zero</span>—no more $200 gas spikes killing your ICO buzz. Investors join without breaking the bank, and your project keeps every penny it deserves.</>,
    icon: <GasFreeIcon />
  },
  {
    title: "Eco-Friendly Mining",
    description:
      <>Power without guilt. Our DAG-based Proof-of-Work rewards parallel validation—not energy-hogging farms—making mining fair and <span className="green">green.</span> Stake PNTECH or plug in a PointTech Miner X10 for sustainable profits, no planet required.</>,
    icon: <EcoFriendlyIcon />
  },
];
export default function UniqueFeature() {
  return (
    <section className="home_unique_features" id="features">
      <Container>
        <div className="home_unique_features_heading">
          <h2>Unique Features</h2>
          <h5 className="text-center">Scalability, Speed, and Simplicity—Redefined for the Decentralized Age</h5>
        </div>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col xxl={4} md={6} sm={6} key={index}>
              <Card className="feature_card">
                <div className="feature_card_icon">{feature.icon}</div>
                <CardBody className="feature_card_body">
                  <h6 className="title">{feature.title}</h6>
                  <p className="decription">{feature.description}</p>
                </CardBody>
              </Card> 
            </Col>
          ))}
        </Row>
        <div className="home_unique_features_cta">
          <CommonButton title="Experience the Difference" className="btn_green" />
          <CommonButton title="Dive Into the Tech" className="btn_unique orange"/>
        </div>
      </Container>
    </section>
  );
};
