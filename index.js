#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const getFiles = require('./lib/files/get-file');
const { askForFile } = require('./lib/files/get-file');

console.log(
    chalk.yellow(
        figlet.textSync('Signal-K', { horizontalLayout: 'full' })
    )
);

askForFile();
//run();
/*
import React, {useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {connect} from "./redux/blockchain/blockchainActions";
import * as s from "./styles/globalStyles";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);

  console.table(blockchain);

  useEffect(() => {
    dispatch(connect());
  }, [dispatch]);

  return <s.Screen>
    <s.Container flex={1} ai={"center"} jc={"center"}>
      <s.TextTitle>
        Our game
      </s.TextTitle>
      <s.SpacerSmall />
      <button>CONNECT</button>
    </s.Container>
  </s.Screen>
}

export default App;
*/
