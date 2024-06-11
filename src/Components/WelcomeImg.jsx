import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Welcome_Img from "../assets/towfiqu-barbhuiya-em5w9_xj3uU-unsplash.jpg";
import ButtonMui from "./Button";
import "../index.scss";

export default function WelcomePage() {
  return (
    <div className="myImgMain">
      <div className="imgDiv">
        <Card sx={{ maxWidth: "100%" }} style={{ borderRadius: 10 }}>
          <CardMedia
            sx={{ height: 720 }}
            style={{ objectFit: "cover" }}
            image={Welcome_Img}
            title="Welcome-Image"
          />
        </Card>
      </div>
      <div>
        <ButtonMui
          redirect="toPassword"
          icon="lock"
          classImg="exploreBtn"
          text="Explore Our Product"
        />
      </div>
    </div>
  );
}
