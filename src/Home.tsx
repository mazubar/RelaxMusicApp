import React, { FunctionComponent } from "react";
// @ts-ignore
import styled, { keyframes } from "styled-components";
import Button from "react-bootstrap/Button";

const HomeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 200px);
    background: url(https://cdn.wallpapersafari.com/11/85/oiGYV4.jpg) no-repeat;
    background-size: 100%;
`;

// const HomeBackground = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 300px;
//     height: 200px;
//     background-color: black;
// `;

const HomeText = styled.div`
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    padding: 1.25rem;
    margin: 0;
`;

export const Home: FunctionComponent = () => (
    <HomeStyled>
        <div>
            <HomeText>Relax and listen to the sounds of nature
            </HomeText>
            <Button variant="primary" href="/audio">Start</Button>{' '}
        </div>
    </HomeStyled>
);