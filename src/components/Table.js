import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Table = ({ today }) => {
    const [index, setIndex] = useState(0);
    const [currentData, setCurrentData] = useState([]);
    function calcRowAmount() {
        const innerTableHeight = window.innerHeight - (72 * 2) - (64 + 56 + 43);
        return Math.floor(innerTableHeight / 43);
    }
    function getRowsFromIndex(amount) {
        const length = today.length;
        const newData = [];
        for (let i = index; i < (index + amount); i++) {
            if (i >= length) {
                newData.push(today[i - length])
            } else {
                newData.push(today[i]);
            }
        }
        setCurrentData(newData);
    }
    function updateRows() {
        getRowsFromIndex(calcRowAmount());
        if (index >= today.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    function getTableStyle() {
        if (today.length > calcRowAmount()) {
            return { height: "calc(100vh - (72px * 2) - (64px + 56px))" }
        } else {
            return { height: "fit-content" }
        }
    }
    useEffect(() => {
        if (today.length > calcRowAmount()) {
            const timer = setInterval(() => {
                updateRows();
            }, 1000);
            // clearing interval
            return () => clearInterval(timer);
        } else {
            setCurrentData(today);
        }

    });
    return (
        <StyledTable className="styled-table" style={getTableStyle()}>
            <table>
                <thead>
                    <tr>
                        <th>Kl.</th>
                        <th>Std.</th>
                        <th>Abw.</th>
                        <th>Ver.</th>
                        <th>Raum</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((element, id) =>
                        <tr key={id}>
                            <td>{element.klasse}</td>
                            <td>{element.std}</td>
                            <td>{element.abw}</td>
                            <td>{element.ver}</td>
                            <td>{element.raum}</td>
                            <td className="info">{element.info}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </StyledTable>
    );
}

const StyledTable = styled.div`
    width: 100%;
    max-height: calc(100vh - (72px * 2) - (64px + 56px));
    border: 2px var(--wasabi) solid;
    border-radius: 8px;
    color: white;
    overflow: hidden;
    table {
        width: 100%;
        border-collapse: collapse;
        font-family: "Roboto";
        font-size: 16px;
        min-width: 400px;
        thead tr {
            background-color: var(--wasabi);
            color: #ffffff;
            text-align: left;
        }
        tbody{
            background-color: var(--dark-fg);
        }
        tbody tr:nth-of-type(even) {
            background-color: var(--dark-bg);
        }
        th, td {
            padding: 12px 16px;
        }
        th {
            font-weight: 900;
        }
        td{
            font-weight: 500;
        }
        td.info{
            max-width: 100px;
        }
    }
`

export default Table;