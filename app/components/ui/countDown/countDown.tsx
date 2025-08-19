"use client";
import React from 'react';
import Countdown from 'react-countdown';
import CommonButton from "../commonButton/CommonButton";
import './countDown.scss';

const Completionist = () => <CommonButton title={"Explore Now!"} role="link" to="#"/>;

const formatTwoDigitsWithSpans = (num: number, label: string): React.ReactNode => {
    const formatted = num < 10 ? `0${num}` : `${num}`;
    return (
        <div className="common_countdown_inner">
            <div className="common_countdown_digits">
                <span>{formatted[0]}</span>
                <span>{formatted[1]}</span>
            </div>
            <span className="common_countdown_label">{label}</span>
        </div>
    );
};

const renderer = ({ days, hours, minutes, seconds, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className="common_countdown">
                {formatTwoDigitsWithSpans(days, "DAYS")}
                {formatTwoDigitsWithSpans(hours, "HOURS")}
                {formatTwoDigitsWithSpans(minutes, "MINUTES")}
                {formatTwoDigitsWithSpans(seconds, "SECONDS")}
            </div>
        );
    }
};

const MyCountdown: React.FC = () => {
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const sevenHoursInMillis = 7 * 60 * 60 * 1000; 
    const thirteenMinsInMillis = 13 * 60 * 1000;

    const now = new Date('2025-04-16T01:11:00.000+05:30').getTime();
    const targetDate = now + oneDayInMillis + sevenHoursInMillis + thirteenMinsInMillis;

    return (
        <Countdown
            date={targetDate}
            renderer={renderer}
        />
    );
};

export default MyCountdown;