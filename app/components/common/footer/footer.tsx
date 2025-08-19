import { DiscordIcon, FacebookIcon, LinkedInIcon, TelegramIcon, TwitterIcon } from "@/app/assets/svgIcons/svgIcon";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Logo from '../../../../public/images/footer-logo.svg';
import './footer.scss';
interface SocialLink {
    to: string;
    icon: React.ReactNode; 
}
export default function Footer() {
    const data =[
        {
            to: "#",
            icon: <LinkedInIcon/>
        },
        {
            to: "#",
            icon: <DiscordIcon/>
        },
        {
            to: "#",
            icon: <FacebookIcon/>
        },
        {
            to: "#",
            icon: <TwitterIcon/>
        },
        {
            to: "#",
            icon: <TelegramIcon/>
        }
    ]
    return (
        <footer className="footer">
            <Container>
                <Image className="footer_logo" src={Logo} height={116} width={121} priority quality={100} alt="Logo" />
                <p>In 2017, ICOs ignited a $6 billion revolution—EOS soared to $4B, Filecoin raked in $257M in hours. Yet, gas fees soared past $200, hacks like the DAO ($60M lost) shook trust, and scalability crumbled. Ponitech Network rewrites this saga. With DAG-powered thousands of TPS, gas-free transactions, and cross-chain magic via our Chain Abstraction Layer, we’re not just a platform—we’re the launchpad for your blockchain dreams. Join a movement where startups thrive, investors trust, and innovation knows no bounds. </p>
                <ul>
                    {data.map((item: SocialLink, index: number) =>{
                        return (

                            <li key={index}><Link href={item.to} target="_blank">{item.icon}</Link></li>
                        )
                    })}
                </ul>
            </Container>
            <div className="footer_copyright">
                <p>Ponitech @{new Date().getFullYear()}, All rights reserved  </p>
            </div>
        </footer>
    )
}