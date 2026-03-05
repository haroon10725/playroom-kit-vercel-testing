import {
  insertCoin,
  myPlayer
} from 'playroomkit'

export default function App() {

  const joinRoom = async () => {
    await insertCoin({
      roomCode: "ABCD",
      skipLobby: true
    })
  }

  const getState = async () => {
    const state = await myPlayer().getState("score")
    console.log(state)
  }

  const setState = async () => {
    await myPlayer().setState("score", 10)
  }

  return (
    <div>
      <button onClick={joinRoom}>Join Room</button>
      <button onClick={setState}>Set State</button>
      <button onClick={getState}>Get State</button>
    </div> 
  )
}