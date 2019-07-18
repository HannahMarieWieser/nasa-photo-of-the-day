import React from "react";
import styled from 'styled-components'

const Homebutton = styled.div`
    padding: 6px 10pc;
    margin: 5px;
    border:none;
    border-radius:3px;
    color: white;


    // // if props.type is explicitly equal to string primary, then return template string where background is set color.

    ${props => (props.type === 'primary') ? `background: #2196f3`:null}
    ${props => (props.type === 'success') ? `background: #4caf50`:null}


`;


export default Homebutton;
