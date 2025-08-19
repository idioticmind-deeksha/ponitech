"use client";
import { useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { ArrowDownSmallIcon } from "../assets/svgIcons/svgIcon";
import CommonBgCard from "../components/ui/commonBgCard/commonBgCard";
import CommonSearch from "../components/ui/commonSearch/commonSearch";
import CommonTable from "../components/ui/commonTable/commonTable";
import './transactionsHistory.scss';
interface DropdownOption {
    value: string;
    label: string;
}
interface Transaction {
    id: string;
    purchasedAgainst: string;
    amtSpent: string;
    amtSpentUSD: string;
    tokenAlloted: string;
    dateTime: string;
    status: "Completed" | string; 
}
export default function TransactionsHistory() {
    const [selectedOption, setSelectedOption] = useState<DropdownOption>({
        value: 'default',
        label: 'Filter'
    });
    const options: DropdownOption[] = [
        { value: 'usdt', label: 'USDT' },
        { value: 'pntech', label: 'PNTECH' },
    ];
    const handleSelect = (option: DropdownOption) => {
        setSelectedOption(option);
    };
    const fields = [
        "Transaction ID",
        "Purchased Against",
        "Amount Spent",
        "Amount Spent in USD",
        "Tokens Alloted",
        "Time & Date",
        "Status",
    ];
    const dividend = [
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
        {
            id: "234h23h4k2j3h",
            purchasedAgainst: "Bitcoin",
            amtSpent: "0.001 BTC",
            amtSpentUSD: "$234",
            tokenAlloted: "12.232132113",
            dateTime: "Feb 07, 23 14:32",
            status: "Completed",
        },
    ];
    return (
        <section className="txn_history">
            <CommonBgCard>
                <Container>
                    <div className="txn_history_head">
                        <Row>
                            <Col md={5} lg={6} className="txn_history_head_left">
                                <h5>Transactions History</h5>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </Col>
                            <Col md={7} lg={6} className="txn_history_head_right">
                                <CommonSearch />
                                <Dropdown>
                                    <Dropdown.Toggle id="filterdrop">
                                        <span>{selectedOption.label} <ArrowDownSmallIcon /></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align={"end"}>
                                        {options.map((option, index) => (
                                            <Dropdown.Item
                                                key={index}
                                                onClick={() => handleSelect(option)}
                                                as="div"
                                            >
                                                {option.label}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    <CommonTable fields={fields} lastColumnWidth="110px"> 
                        {dividend.map((item: Transaction, index: number) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.purchasedAgainst}</td>
                                <td>{item.amtSpent}</td>
                                <td>{item.amtSpentUSD}</td>
                                <td>{item.tokenAlloted}</td>
                                <td>{item.dateTime}</td>
                                <td className={item.status === "Completed" ? "text-green" : ""}>{item.status}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </Container>
            </CommonBgCard>
        </section>
    )
}