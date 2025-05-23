import profilePic from "./assets/Geto-Square.png";

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">fFukurou</h2>
      <p className="card-text">
        ADS Student at FIAP | Video Editor | Video Gamer
      </p>
    </div>
  );
}
