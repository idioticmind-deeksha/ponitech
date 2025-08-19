"use client";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Col, Container, Dropdown, Form, ProgressBar, Row } from "react-bootstrap";
import CommonBgCard from "../components/ui/commonBgCard/commonBgCard";
import CommonButton from "../components/ui/commonButton/CommonButton";
import MyCountdown from "../components/ui/countDown/countDown";
import FormControl from "../components/formik/formControl";
import './buyToken.scss';
import { ArrowDownIcon, VerticalGradienLine } from "../assets/svgIcons/svgIcon";
import { useState } from "react";
import USDT from '../../public/images/usdticon.png';
import PNTECH from '../../public/images/pntechicon.png';
import Image from "next/image";
import HowToBuy from "./howToBuy";
interface LoginFormValues {
    payamt: string;
    receiveamt: string;
}
// interface ComingSoonProps {
//     onClick?: () => void;
// }
interface DropdownOption {
    value: string;
    label: string;
    icon: string;
}
export default function ComingSoon() {
    // export default function ComingSoon({ onClick } : ComingSoonProps) {
    const [selectedOption, setSelectedOption] = useState<DropdownOption>({
        value: 'default',
        label: 'Select Option',
        icon: '',
    });
    const options: DropdownOption[] = [
        { value: 'usdt', label: 'USDT', icon: USDT.src },
        { value: 'pntech', label: 'PNTECH', icon: PNTECH.src },
    ];
    const handleSelect = (option: DropdownOption) => {
        setSelectedOption(option);
    };
    const initialValues: LoginFormValues = {
        payamt: "",
        receiveamt: "",
    };
    const validationSchema: Yup.ObjectSchema<LoginFormValues> = Yup.object({
        payamt: Yup.string().required('Required field'),
        receiveamt: Yup.string().required('Required field'),
    });
    const onSubmit = (values: LoginFormValues) => {
        console.log("Form values submitted:", values);
        // if (onClick) {
        //     onClick();
        // }
        alert("form submitted ");
    };
    const formik = useFormik<LoginFormValues>({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <section className="coming_soon">
            <CommonBgCard>
                <Container>
                    <Row className="align-items-center">
                        <Col xl={6}>
                            <div className="coming_soon_left">
                                <h1>PHASE 2</h1>
                                <h2>COMING SOON</h2>
                                <MyCountdown />
                            </div>
                        </Col>
                        <Col xl={6} className="coming_soon_right">
                            <div className="coming_soon_right_box">
                                <span>Phase Two</span>
                                <h3>1 PONITECH = $0.022</h3>
                                <p>Next Stage Price = $0.044</p>
                                <div className="coming_soon_right_inner">
                                    <Row>
                                        <Col sm={5}>
                                            <div className="d-table">
                                                <h6>USD Raised:</h6>
                                                <p>$ 156,105.584 / $ 484,000</p>
                                                <ProgressBar now={60} />
                                            </div>
                                        </Col>
                                        <Col sm={2} className="text-center">
                                            <VerticalGradienLine />
                                        </Col>
                                        <Col sm={5}>
                                            <div className="d-table ms-sm-auto">
                                                <h6>Token Sold:</h6>
                                                <p>7095708.37 / 22000000</p>
                                                <ProgressBar now={20} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="coming_soon_right_inner">
                                    <Form onSubmit={formik.handleSubmit}>
                                        <FormControl
                                            className="pay"
                                            name="payamt"
                                            placeholder="Amount You Pay"
                                            value={formik.values.payamt}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.payamt && formik.errors.payamt}
                                            righttext={
                                                <Dropdown className="input-selectbox">
                                                    <Dropdown.Toggle id="inputdropdown">
                                                        <>
                                                            {selectedOption.icon && (
                                                                <>
                                                                    <Image src={selectedOption.icon} height="32" width="32" alt="icon" />
                                                                </>
                                                            )}
                                                            <span>{selectedOption.label} </span>
                                                            <ArrowDownIcon />
                                                        </>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu align={"end"}>
                                                        {options.map((option, index) => (
                                                            <Dropdown.Item
                                                                key={index}
                                                                onClick={() => handleSelect(option)}
                                                                as="div"
                                                            >
                                                                <Image src={option.icon} height="32" width="32" alt="icon" />
                                                                {option.label}
                                                            </Dropdown.Item>
                                                        ))}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            }
                                        />
                                        <FormControl
                                            className="receive"
                                            name="receiveamt"
                                            placeholder="Amount You Receive"
                                            value={formik.values.receiveamt}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            righttext={<><Image src={PNTECH} height="32" width="32" alt="icon" /> <span>PNTECH</span></>}
                                            error={formik.touched.receiveamt && formik.errors.receiveamt}
                                        />
                                        <CommonButton title="Buy PONITECH" type="submit" fluid />
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <HowToBuy/>
                </Container>
            </CommonBgCard>
        </section>
    );
}