import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ol`
width: 600px
`

export const ListItem = styled.li`
color: #000000;
font-size: 36px;
font-weight: 500px;
&:hover,
 &:focus {
    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
 }
`

export const ListLink = styled(NavLink)`
text-decoration: none;
color: inherit;
`
