import React from "react";
import styled from 'styled-components'

const Homelink = styled.div`
    margin:auto;
    padding: 6px 10px;
    border:none;
    text-decoration: none;
    border-radius:3px;
    color: white;
    background-color:  #3399ff;
    width: 100px;
    


    // // if props.type is explicitly equal to string primary, then return template string where background is set color.

    ${props => (props.type === 'Home') ? `background:  #3399ff`:null}
    ${props => (props.type === 'success') ? `background: #4caf50`:null}


`;


export default Homelink;