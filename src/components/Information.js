import React from "react";
import styled from "styled-components";

const Information = ({ information }) => {
    console.log(information)
    return (information &&
        <StyledInformation className="box">
            <b>{information.datum} | </b>
            <b>{information.woche}-Woche</b>
            <ol>
                {information.nachrichten.map((message, index) => <li key={index}>{message}</li>)}
            </ol>
        </StyledInformation>

    );
}

const StyledInformation = styled.div`
    padding: 12px 16px;
    color: white;
    ol{
        margin-top: 8px;
        list-style: inside;
        li{
        font-family: "Roboto";
        font-weight: 500;
        margin-bottom: 2px;
    }
    }
`

export default Information;