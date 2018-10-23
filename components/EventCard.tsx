import * as React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../lib/mq";

type Props = {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  className?: string;
};

const EventCard = ({
  image,
  title,
  location,
  date,
  time,
  className
}: Props) => {
  return (
    <div className={className}>
      <EventImage src={image} />
      <div
        className={css`
          flex: 50%;
          display: flex;
          align-items: center;
          padding-left: 60px;
          ${mq.medium(css`
            padding: 20px;
          `)};
        `}
      >
        <Info>
          <EventTitle>{title}</EventTitle>
          <EventLocation>{location}</EventLocation>
          <EventDateTime date={date} time={time} />
        </Info>
      </div>
    </div>
  );
};

const Info = styled.div`
  border-left: 5px solid #0734ff;
  padding-left: 20px;
`;

const EventTitle = styled.h4`
  color: #000d45;
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: normal;
  margin: 0;
  ${mq.medium(css`
    font-size: 18px;
    margin-top: -10px;
    margin-bottom: -10px;
  `)};
`;

const EventLocation = styled.div`
  color: #69708d;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 16px;
  ${mq.medium(css`
    font-size: 14px;
    margin-bottom: 5px;
  `)};
`;

const EventDateTime = ({ date, time }: { date: string; time: string }) => (
  <div
    className={css`
      font-size: 16px;
      height: 36px;
      display: flex;
      width: 263px;
      line-height: 19px;
      ${mq.medium(css`
        flex-direction: column;
        border-radius: 8px 8px 0 0;
        width: 100%;
        font-size: 12px;
        font-weight: bold;
        line-height: 14px;
      `)};
      div {
        flex: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        ${mq.medium(css`
          justify-content: left;
        `)};
      }
    `}
  >
    <Date>{date}</Date>
    <Time>{time}</Time>
  </div>
);

const Date = styled.div`
  border-radius: 8px 0 0 8px;
  background-color: #0734ff;
  color: #ffffff;
  font-weight: bold;
  ${mq.medium(css`
    background-color: #fff;
    color: #000d45;
  `)};
`;

const Time = styled.div`
  color: #000d45;
  background-color: #ecefff;
  border-radius: 0 8px 8px 0;
  ${mq.medium(css`
    background-color: #fff;
    font-weight: normal;
  `)};
`;

const EventImage = styled.div`
  height: 100%;
  border-radius: 8px 0 0 8px;
  flex: 50%;
  background: url(${(props: { src: string }) => props.src}) no-repeat center
    center;
  background-size: cover;
  ${mq.medium(css`
    height: 115px;
    border-radius: 8px 8px 0 0;
  `)};
`;

export default styled(EventCard)`
  height: 276px;
  max-width: 1142px;
  border: 1px solid #cbcfe2;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px 0 #bec6eb;
  display: flex;

  ${mq.medium(css`
    flex-direction: column;
  `)};
`;
