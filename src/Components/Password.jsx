import InputComp from "./Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import ButtonMui from "./Button";
import "../index.scss";
import { useState, useCallback, useRef } from "react";
import toast from "react-hot-toast";

export default function PasswordPage() {
  const [length, setLength] = useState(3);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordRender = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (character) {
      str += "!@@~#$%^^&*())";
    }

    if (number) {
      str += "0123456789";
    }

    for (let i = 0; i <= length; i++) {
      const makePassword = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(makePassword);
    }

    setPassword(pass);
    {
      toast.success("Password generated successfully!");
    }
  }, [length, character, number, setPassword]);

  const copyToClipboard = () => {
    if (password) {
      window.navigator.clipboard.writeText(password);
      toast.success("Copied Successfully!");
    } else {
      toast.error("Please generate password first.");
    }
  };

  return (
    <div className="mainPasswordGenerator">
      <div className="passwordGenerator">
        <div>
          <InputComp value={password} reference={passwordRef} />
        </div>
        <div>
          <Box className="sliderBxWidth" sx={{ width: 250 }}>
            <Slider
              className="slider"
              valueLabelDisplay="auto"
              shiftStep={30}
              step={1}
              min={3}
              max={20}
              marks
              onChange={(e) => setLength(e.target.value)}
            />
          </Box>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                className="checkBox"
                checked={number}
                onChange={() => setNumber((prev) => !prev)}
              />
            }
            label="Numbers"
          />
          <FormControlLabel
            control={
              <Checkbox
                className="checkBox"
                checked={character}
                onChange={() => setCharacter((prev) => !prev)}
              />
            }
            label="Character"
          />
        </div>
        <div className="passwordBtn">
          <ButtonMui
            className="generateBtn"
            text="Generate"
            icon="generate"
            click={passwordRender}
          />
          <ButtonMui
            className="copyBtn"
            text="Copy"
            icon="copy"
            copy={copyToClipboard}
          />
        </div>
      </div>
    </div>
  );
}
