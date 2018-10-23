import * as React from "react";

import styled from "react-emotion";
import { css } from "emotion";
import Section from "./Section";
import memberData from "../lib/members.json";

const Category = ({
  header,
  members,
  className
}: {
  header: string;
  members: string[];
  className?: string;
}) => (
  <div className={className}>
    <h4>{header}</h4>
    <ul>
      {members.map(member => {
        const data = memberData.members[member];
        return (
          <li key={member}>
            <a href={(data && data.url) || "#"} target="_blank">
              {member}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const StyledCategory = styled(Category)`
  h4 {
    color: #000d45;
    font-size: 28px;
    font-weight: bold;
    line-height: 34px;
    :after {
      display: block;
      content: "";
      margin-top: 12px;
      height: 1px;
      width: 33px;
      border-bottom: 5px solid #0734ff;
    }
    margin-bottom: 27px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #0734ff;
    font-size: 20px;
    line-height: 24px;
    :hover {
      color: #000d45;
    }
  }
  margin-bottom: 67px;
`;

const CategoryColumn = ({ categories }: { categories: any[] }) => (
  <div
    className={css`
      flex: 50%;
    `}
  >
    {categories.map(([header, members]) => (
      <StyledCategory header={header} members={members as string[]} />
    ))}
  </div>
);

const CategoryColumns = styled.div`
  display: flex;
`;

const Members = ({ className }: { className?: string }) => {
  const categories = Object.entries(memberData.categories).sort(
    (a, b) => (a < b ? -1 : 1)
  );
  return (
    <Section className={className}>
      <h2>Members</h2>
      <CategoryColumns>
        <CategoryColumn categories={categories.slice(0, 5)} />
        <CategoryColumn categories={categories.slice(5)} />
      </CategoryColumns>
    </Section>
  );
};

export default styled(Members)``;
