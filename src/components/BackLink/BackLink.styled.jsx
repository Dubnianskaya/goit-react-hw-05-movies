import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Arrow = styled(AiOutlineArrowLeft)`
width: 40px;
`
export const GoBackLink = styled(NavLink)`
display: flex;
align-items: center;
color: inherit;
font-size: 28px;
font-weight: 500px;
text-decoration: none;
margin-bottom: 20px;
 &:hover,
 &:focus {
    text-shadow: 0px 3px 1px rgba(255, 255, 255, 0.9), 0px 1px 2px rgba(0, 0, 0, 0.8),
    0px 2px 2px rgba(255, 255, 255, 0.12);
 }
`