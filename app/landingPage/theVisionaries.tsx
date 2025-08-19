import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Image1 from "../../public/images/testinomials1.svg";
import Image2 from "../../public/images/testinomials2.svg";
import Image3 from "../../public/images/testinomials3.svg";
import Image4 from "../../public/images/testinomials4.svg";
import CommonButton from "../components/ui/commonButton/CommonButton";

const team = [
  {
    name: "FOUNDER & CEO",
    description:
      "The mastermind behind Ponitech’s vision, blending blockchain expertise with a passion for empowering startups. A veteran of decentralized tech, they’re charting the course from Q2 2025 mainnet to global dominance.",
    image: Image1,
  },
  {
    name: "CHIEF TECHNOLOGY OFFICER",
    description:
      "Architect of the DAG and Chain Abstraction Layer, this tech titan turns complexity into scalability. With a track record in cutting-edge systems, they’re building Ponitech’s unbreakable core.",
    image: Image2,
  },
  {
    name: "HEAD OF OPERATIONS",
    description:
      "The engine keeping Ponitech’s $500M ecosystem humming, they orchestrate miner sales, staking, and global outreach. A logistics guru ensuring every milestone hits on time.",
    image: Image3,
  },
  {
    name: "CHIEF MARKETING OFFICER",
    description:
      "Spinning Ponitech’s story into a global wildfire, this strategist fuels the 20% marketing allocation with flair. They’re why you’ve heard of us—and why you’ll join.",
    image: Image4,
  },
];

const TheVisionaries = () => {
  return (
    <section className="home_the_visionaries" id="team">
      <Container>
        <div className="home_the_visionaries_content">
        <div className="home_the_visionaries_head">
          <h2>The Visionaries Behind Ponitech: Driving the Future Forward</h2>
          <h5>
            Meet the Minds Turning Blockchain Dreams into <span>Reality</span>
          </h5>
          <p>
            Behind Ponitech Network’s <span>$500M mission</span> stands a team
            of relentless innovators, united by a single goal: to redefine
            decentralized fundraising. From the ashes of 2017’s ICO chaos—where
            congestion choked Ethereum and hacks like the DAO shook
            trust—they’ve forged a platform that’s fast, secure, and limitless.
            Experts in blockchain architecture, cross-chain tech, and
            sustainable systems, our leaders bring decades of experience to
            deliver DAG-powered scalability, no-code simplicity, and a roadmap
            to Q3 2027 global adoption. This isn’t just a team—it’s the crew
            steering the ship to the <span>next crypto frontier.</span> Get to
            know the faces making it happen.
          </p>
        </div>
        <Row>
          {team.map((member, index) => (
            <Col md={6} key={index}>
              <div className="home_the_visionaries_testinomials">
                <div className="home_the_visionaries_testinomials_img">
                  <Image src={member.image} alt={member.name} quality={100} />
                </div>
                <h6>{member.name}</h6>
                <p>{member.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="home_the_visionaries_cta">
          <CommonButton title="Connect with the Team" />
          <CommonButton title="Learn Their Vision" className="btn_unique secondry"/>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default TheVisionaries;
