import { Button } from "@mui/material";
import { MdLockReset } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";

export default function ButtonMui({
  text,
  className,
  icon,
  redirect,
  click,
  copy,
}) {
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
        className={`${className}`}
        onClick={
          (redirect === "toPassword" && navigateToPassword) || click || copy
        }
        endIcon={
          (icon === "lock" && <MdLockReset className="icon" />) ||
          (icon === "copy" && <FaCopy />) ||
          (icon === "generate" && <RiAiGenerate />)
        }
      >
        {text}
      </Button>
    </div>
  );
}
