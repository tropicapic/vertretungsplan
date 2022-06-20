import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import Information from "../components/Information";

function Vertretung() {
    const [today, setToday] = useState([]);
    const [tomorrow, setTomorrow] = useState([]);
    const [information, setInformation] = useState([]);

    const getToday = async () => {
        const res = await fetch("https://ka-ro-final.vercel.app/data/heute.json");
        const answer = await res.json();
        setToday(answer);
    };
    const getTomorrow = async () => {
        const res = await fetch("https://ka-ro-final.vercel.app/data/morgen.json");
        const answer = await res.json();
        setTomorrow(answer);
    };
    const getInformation = async () => {
        const res = await fetch("https://ka-ro-final.vercel.app/data/nachrichten.json");
        const answer = await res.json();
        setInformation(answer);
    };

    useEffect(() => {
        getToday();
        getTomorrow();
        getInformation();
    }, []);

    return (
        <StyledVertretung>
            <header className="title">
                <h1>Vertretungsplan</h1>
                <img src="/karo-logo-wasabi.png" alt="karo-logo" />
            </header>
            <main>
                <div className="today">
                    <Table today={today} />
                </div>
                <div className="tomorrow">
                    <Table today={today} />
                </div>
                <div className="information">
                    <div className="header">
                        <b>Nachrichten der Schulleitung am 21.07.2022</b>
                    </div>
                    {information.map((info, index) => <Information key={index} information={info} />)}
                </div>
            </main>
        </StyledVertretung>
    )
}

const StyledVertretung = styled.div`
    min-height: 100vh;
    height: 100%;
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
    main{
        width: 100%;
        display: flex;
        .today, .tomorrow{
            width: 100%;
            margin-right: 16px;
        }
        .information{
            width: 100%;
            height: fit-content;
            color: white;
            border-radius: 8px;
            border: 2px var(--wasabi) solid;
            width: 100%;
            .header{
                height: fit-content;
                min-height: 43px;
                background-color: var(--wasabi);
                padding: 12px 16px;
                b{
                    font-size: 16px;
                }
            }
        }
    }
`

export default Vertretung;