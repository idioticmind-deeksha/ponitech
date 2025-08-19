"use client";
import { Accordion, Container } from "react-bootstrap";
import CommonButton from "../components/ui/commonButton/CommonButton";
export default function Faq() {
  const faqs = [
    {
      question: "What is Ponitech Network and PNTECH?",
      answer:
        "PNTECH isn’t just a token—it’s a stake in the future of fundraising. With pre-sales starting at $0.0001 and a roadmap to Q3 2027 global adoption, early adopters get in low for high potential. Gas-free ICOs, cross-chain reach, and eco-friendly mining make it a standout. Don’t miss the 35.5% pre-sale tranche—slots are vanishing fast!",
    },
    {
      question: "Why should I invest in PNTECH?",
      answer:
        "PNTECH isn’t just a token—it’s a stake in the future of fundraising. With pre-sales starting at $0.0001 and a roadmap to Q3 2027 global adoption, early adopters get in low for high potential. Gas-free ICOs, cross-chain reach, and eco-friendly mining make it a standout. Don’t miss the 35.5% pre-sale tranche—slots are vanishing fast!",
    },
    {
      question: "How do I buy?",
      answer: "You can buy PNTECH from our official website during the pre-sale or from supported exchanges after the launch.",
    },
    {
      question: "What makes PNTECH different from other coins?",
      answer: "Eco-friendly mining, gas-free ICOs, and strong cross-chain capabilities.",
    },
    {
      question: "Is PNTECH secure?",
      answer: "You can buy PNTECH from our official website during the pre-sale or from supported exchanges after the launch.",
    },
    {
      question: "What’s the total supply and how is it distributed? ",
      answer: "Eco-friendly mining, gas-free ICOs, and strong cross-chain capabilities.",
    },
    {
      question: "Can I mine or stake PNTECH?",
      answer: "Eco-friendly mining, gas-free ICOs, and strong cross-chain capabilities.",
    },
    {
      question: "When does Ponitech launch, and what’s next?",
      answer: "Eco-friendly mining, gas-free ICOs, and strong cross-chain capabilities.",
    },
  ];
  return (
    <section className="home_faq" id="faq">
      <Container>
        <div className="home_faq_info">
          <h2 className="text-center fw-bold">Frequently Asked Questions</h2>
          <div className="home_faq_content">
            <Accordion defaultActiveKey="1" className="faq__accordion">
              {faqs.map((faq, index: number) => {
                const Key = String(index);
                return (
                  <Accordion.Item eventKey={`${Key}`} key={index} className="faq__item">
                    <Accordion.Header className="faq__question">{`${index + 1}. ${faq.question}`}</Accordion.Header>
                    <Accordion.Body className="faq__answer">{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                )
              }
              )}
            </Accordion>
          </div>
          <div className="home_faq_cta">
            <CommonButton title="Get Answers, Get In" className="btn_lightgreen" />
            <CommonButton title="Ask Us More" className="btn_unique red" />
          </div>
        </div>
      </Container>
    </section>
  );
};
