import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
color: #000000;
font-size: 36px;
font-weight: 500px;
&:hover,
 &:focus {
    text-shadow: 0 0 10px rgb(63, 131, 209);
 }
`

export const ListLink = styled(NavLink)`
text-decoration: none;
color: inherit;
`
