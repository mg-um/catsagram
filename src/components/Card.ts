import styled from "styled-components";
import { sizeToPx } from "./Box";

const Card = styled.div`
  border: 1px solid #d3d3d3;
  background-color: white;
  border-radius: 5px;
  padding: ${sizeToPx('lg')}px;
`;

export default Card;