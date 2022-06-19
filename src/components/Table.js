import React from "react";
import styled from "styled-components";

const Table = ({ today }) => {
    console.log(today)
    return (
        <StyledTable className="styled-table">
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
                    {today.map(element =>
                        <tr>
                            <td>{element.klasse}</td>
                            <td>{element.std}</td>
                            <td>{element.abw}</td>
                            <td>{element.ver}</td>
                            <td>{element.klasse}</td>
                            <td>Fach:E</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </StyledTable>
    );
}

const StyledTable = styled.div`
    width: 100%;
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
    }
`

export default Table;