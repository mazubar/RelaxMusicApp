import React, {FunctionComponent} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// const rain = require("./assets/rain.mp3");

export const Audio: FunctionComponent = () => (
    <main>
        <p>Rain<audio controls src="https://d9olupt5igjta.cloudfront.net/samples/sample_files/47832/5372f24f4b0b2de695762472fcf34e8967859be1/mp3/_Thunder_City.mp3?1601442137"></audio></p>
        <p>Forest<audio controls src="https://d9olupt5igjta.cloudfront.net/samples/sample_files/17011/f86c3ca8fc84fba22baf0d716f430234ed69a609/mp3/_Birds_in_the_Forest_1.mp3?1525028123"></audio></p>
        <p>Ocean<audio controls src="https://d9olupt5igjta.cloudfront.net/samples/sample_files/31843/944e3896a06f9af64ba1a1bbbfad0de7169822a9/mp3/_Waves.mp3?1584914922"></audio></p>
        <p>Wind<audio controls src="https://d9olupt5igjta.cloudfront.net/samples/sample_files/28282/9059bd6ef3d1bad197531a2dfed47e3d668c7fa0/mp3/_Wind_Sound_Effect.mp3?1577254504"></audio></p>
        <p>Thunder<audio controls src="https://d9olupt5igjta.cloudfront.net/samples/sample_files/231/fd979ca5c266aa163c222b844adcc46c22cc9c9d/mp3/_fx_6.mp3?1512765092"></audio></p>
        <p>Bonfire and bugs<audio controls src="https://d9olupt5igjta.cloudfront.net/samples/sample_files/22152/e5de70ed223ce2bf6201e29838b9484e0d632cf8/mp3/_Bonfire-n-Bugs.mp3?1541962035"></audio></p>
    </main>)