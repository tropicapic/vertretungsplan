import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "../components/Table";

function Vertretung() {
    const [today, setToday] = useState([]);

    const getToday = async () => {
        const res = await fetch("https://raw.githubusercontent.com/riedadr/karo/master/data/heute.json");
        const answer = await res.json();
        setToday(answer);
    };

    useEffect(() => {
        getToday();
    }, []);

    return (
        <StyledVertretung>
            <header className="title">
                <h1>Vertretungsplan</h1>
                <img src="/karo-logo-wasabi.png" alt="karo-logo" />
            </header>
            <main>
                <Table today={today} />
            </main>
        </StyledVertretung>
    )
}

const StyledVertretung = styled.div`
    min-height: 100vh;
    padding: 72px;
    background-color: var(--dark-bg);
    .title{
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:  56px;
        h1{
            font-size: 40px;
            line-height: 40px;
            color: var(--wasabi);
        }
        img{
            height: 100%;
        }
    }
    
`

export default Vertretung;