import GameBoard from "./components/GameBoard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Memory Matching Game</h1>
      <GameBoard />
    </div>
  );
}
