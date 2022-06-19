import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import Vertretung from "./screens/Vertretung";
const serverHostURL = "http://192.168.178.35:4001";

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io.connect(serverHostURL);
    socket.on('connect', () => {
      console.log("Connected with server", socket.connected);
      setConnected(socket.connected);
    })
    socket.on("disconnect", () => {
      console.log("Connected with server", socket.connected);
      setConnected(socket.connected);
    })
  }, []);

  return (connected && <Vertretung />);
}

export default App;