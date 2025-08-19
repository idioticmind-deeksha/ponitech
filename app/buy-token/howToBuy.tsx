import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Step1 from '../../public/images/step1.png';
import Step2 from '../../public/images/step2.png';
import Step3 from '../../public/images/step3.png';
export default function HowToBuy() {
    const steps = [
        {
            id: 1,
            icon: Step1,
            title: 'Step 1 - Wallet Setup',
            description:
                'Welcome aboard! Start by getting MetaMask on your desktop browser or a Wallet Connect-compatible wallet like Trust Wallet for mobile. Desktop users, MetaMask is ideal for a smooth purchase process. Mobile users, Trust Wallet or MetaMask connect is your go-to.',
        },
        {
            id: 2,
            icon: Step2,
            title: 'Step 2 - Purchase Process',
            description:
                "Ready to invest? Simply pick your preferred currency on our site, input how many TICS tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you'll also see the gas fees. Note: Purchasing with USDT/USDC may involve two approvals—one to okay the contract and another for the actual payment.",
        },
        {
            id: 3,
            icon: Step3,
            title: 'Step 3 - Token Reception',
            description:
                "Once our presale wraps up, you can collect your TICS tokens through our website or wait for an airdrop straight to your wallet. Meanwhile, keep an eye on your investment and the token prices from your dashboard. Just connect your wallet to our website, and voilà—you're there!",
        },
    ];
    return (
        <section className="howto_buy">
            <div className="howto_buy_head">
                <h2>HOW TO <span>BUY</span></h2>
                <p>Buying  with ETH, BNB, USDT, USDC or BUSD</p>
            </div>
            <Row className="howto_buy_row">
                {steps.map((item, index) => (
                    <Col md={4} key={index}>
                        <div className="howto_buy_box">
                            <div className="icon"><Image src={item.icon} quality="100" alt="icon" /></div>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    )
}