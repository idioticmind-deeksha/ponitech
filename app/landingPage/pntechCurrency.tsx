"use client";
import { Col, Container, Row } from "react-bootstrap";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CommonButton from "../components/ui/commonButton/CommonButton";
interface TokenItem {
    category: string;
    tokens: string;
    percentage: string;
    color: string;
}
const data = [
    { name: 'Segment 1', value: 8000000000 },
    { name: 'Segment 2', value: 6000000000 },
    { name: 'Segment 3', value: 4000000000 },
    { name: 'Segment 4', value: 3200000000 },
    { name: 'Segment 5', value: 2000000000 },
    { name: 'Segment 6', value: 4800000000 },
    { name: 'Segment 7', value: 6000000000 },
    { name: 'Segment 8', value: 4000000000 },
    { name: 'Segment 9', value: 2000000000 },
];
const COLORS = [
    '#A3CFFA',
    '#50E3C2',
    '#F5A623',
    '#F76C6C',
    '#D94F70',
    '#A463F2',
    '#4A90E2',
    '#4AB8E2',
    '#50C4FA',
];
export default function PntechCurrency() {
    const tokenData: TokenItem[] = [
        { category: 'Pre-sale', tokens: '9650000000 Tokens', percentage: '24.13%', color: '#00C4FF' },
        { category: 'Public Sale 1', tokens: '1,000,000,000.00 Tokens', percentage: '2.50%', color: '#FF3333' },
        { category: 'Public Sale 2', tokens: '1,000,000,000.00 Tokens', percentage: '2.50%', color: '#FFFF33' },
        { category: 'Public Sale 3', tokens: '1,000,000,000.00 Tokens', percentage: '2.50%', color: '#33FF33' },
        { category: 'Ecosystem', tokens: '5,000,000,000.00 Tokens', percentage: '12.50%', color: '#FF9933' },
        { category: 'Treasury', tokens: '10,000,000,000.00 Tokens', percentage: '25%', color: '#9933FF' },
        { category: 'Team', tokens: '2,000,000,000.00 Tokens', percentage: '5%', color: '#FF33CC' },
        { category: 'Marketing', tokens: '8,000,000,000.00 Tokens', percentage: '20%', color: '#33CCFF' },
        { category: 'Advisors Committee', tokens: '2,400,000,000.00 Tokens', percentage: '6%', color: '#66CCFF' },
    ];
    return (
        <section className="home_currency" id="tokenomics">
            <Container>
                <div className="home_currency_content">
                    <h2>PNTECH: The Currency of Tomorrow’s ICOs—Secure Your Stake</h2>
                    <h5>A $500M Ecosystem Built on Precision and Opportunity—<span>Act Before It’s Gone</span></h5>
                    <p>PNTECH isn’t just a token—it’s the heartbeat of Ponitech Network, a 40 billion-strong ecosystem fueling the next wave of decentralized fundraising. With <span>$500M</span> in targeted raises across 27 pre-sale rounds (starting at $0.0001) and 3 public sales (up to $0.4), every PNTECH is a ticket to gas-free transactions, cross-chain power, staking rewards, and eco-friendly mining. Locked and vested from 3 to 24 months, our tokenomics ensure stability—no wild dumps, just <span>steady growth.</span> From the $5,000 pre-sale pioneers to the $400M public sale titans, this is your shot at a meticulously crafted economy. Don’t wait—the pre-sale clock is ticking, and 35.5% of supply is already in play. </p>
                    <div className="home_currency_content_cta">
                        <CommonButton title="Claim Your PNTECH Now" />
                        <CommonButton title="Explore the Numbers" className="btn_unique red" />
                    </div>
                </div>
                <div className="home_currency_tokens">
                    <Row className="align-items-center justify-content-center">
                        <Col md={6} lg={5}>
                            <div className="home_currency_tokens_chart">
                                <ResponsiveContainer width="100%" height="100%" aspect={1}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={"55%"}
                                            outerRadius={"68%"}
                                            fill="#8884d8"
                                            paddingAngle={1}
                                            dataKey="value"
                                            cornerRadius={5}
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="home_currency_tokens_chart_content"
                                >
                                    <h4>Token Supply Tokens</h4>
                                    <h2>40,000,000,000</h2>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <ul className="home_currency_tokens_content">
                                {tokenData.map((item: TokenItem, index: number) => (
                                    <li
                                        key={index}
                                    >
                                        <div className="left" style={{
                                            borderLeft: `.4rem solid ${item.color}`,
                                        }}><span>{item.category}:</span> {item.tokens}</div>
                                        <div className="right">{item.percentage}</div>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}