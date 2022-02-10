import { FcBusinessman } from "react-icons/fc";
import { IconContext } from "react-icons";
import styled from "styled-components";

const IconContainer = styled.div`
height: 230px;
width: 154px;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: #ffffff;
`

const ImagePlug = () => {

    return (
    <IconContext.Provider value={{ size: "154px" }}>
     <IconContainer>
      <FcBusinessman />
     </IconContainer>
    </IconContext.Provider>
    )
}

export default ImagePlug;