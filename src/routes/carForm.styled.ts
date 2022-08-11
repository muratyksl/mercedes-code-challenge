import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  margin: 1.2rem 0;
`;

export const SelectOptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ColorBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  border-radius: 0.25rem;
`;
