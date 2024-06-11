import { Button } from "@mui/material";
import { MdLockReset } from "react-icons/md";
import { redirect, useNavigate } from "react-router-dom";

export default function ButtonMui({ text, classImg, icon, redirect }) {
  const navigate = useNavigate();
  const navigateToPassword = () => {
    navigate("/password");
  };
  const alternate = () => {
    console.log("Happy Coding!");
  };
  return (
    <div>
      <Button
        className={`${classImg}`}
        onClick={redirect === "toPassword" ? navigateToPassword : alternate}
        endIcon={icon === "lock" ? <MdLockReset className="icon" /> : ""}
      >
        {text}
      </Button>
    </div>
  );
}
