import { useParams } from "react-router-dom";
import "./index.css";

export default function Home() {
  const { user } = useParams();

  return (
    <>
      <div className="pixel-pet">
        <h1>PixelPet</h1>
      </div>

      {user == undefined ? (
        <h2>Bem vindo(a) ao mundo pixel de criaturas</h2>
      ) : (
        user
      )}
    </>
  );
}
