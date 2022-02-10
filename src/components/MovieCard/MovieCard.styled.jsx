import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const MovieCardContainer = styled.div`
  display: flex;
  width: 1000px;
  margin-bottom: 30px;
`;

export const MovieInfoContainer = styled.div`
width: 600px;
margin-left: 30px;
`;

export const AdditionalInformationBox = styled.div`
width: 1000px;
`

export const AdditionalInformationList = styled.ul`
display: flex;
flex-direction: column;
list-style: disc;
margin-bottom: 30px;
`

export const AdditionalInformationLink= styled(NavLink)`
color: #ffffff;
font-size: 30px;
font-weight: 500px;
text-decoration: none;
 &:hover,
 &:focus {
    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.9), 0px 1px 2px rgba(0, 0, 0, 0.8),
    0px 2px 2px rgba(0, 0, 0, 0.12);
 }
`

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-top: -20px;
`

export const CastListItem = styled.li`
flex-basis: calc((100% - 100px) / 5);
max-width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`