import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const LayoutHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
min-height: 100vh;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 42px;
background-color: #3895ff7a;
`;

export const Link = styled(NavLink)`
color: #ffffff;
font-size: 42px;
font-weight: 500px;
padding: 0 40px;
text-decoration: none;
 &:hover,
 &:focus {
    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.9), 0px 1px 2px rgba(0, 0, 0, 0.8),
    0px 2px 2px rgba(0, 0, 0, 0.12);
 }
`
