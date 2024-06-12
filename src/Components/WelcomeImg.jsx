import CardComp from "./Card";
import ButtonMui from "./Button";
import "../index.scss";

export default function WelcomePage() {
  return (
    <div className="myImgMain">
      <CardComp image="welcome" />
      <div>
        <ButtonMui
          redirect="toPassword"
          icon="lock"
          className="exploreBtn"
          text="Explore Our Product"
        />
      </div>
    </div>
  );
}
