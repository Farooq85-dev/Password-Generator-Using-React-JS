import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Welcome_Img from "../assets/welcome-img.jpg";
import Password_Img from "../assets/password-img.jpg";
import "../index.scss";

export default function CardComp({ image }) {
  return (
    <div>
      <div className="imgDiv">
        <Card sx={{ maxWidth: "100%" }} style={{ borderRadius: 10 }}>
          <CardMedia
            sx={{ height: 720 }}
            style={{ objectFit: "cover" }}
            image={image === "welcome" && `${Welcome_Img}`}
            title="Welcome-Image"
          />
        </Card>
      </div>
    </div>
  );
}
