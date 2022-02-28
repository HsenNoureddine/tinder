import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipe__icon Replay">
        <ReplayIcon />
      </IconButton>
      <IconButton className="swipe__icon Close">
        <CloseIcon />
      </IconButton>
      <IconButton className="swipe__icon Star">
        <StarRateIcon />
      </IconButton>
      <IconButton className="swipe__icon Favorite">
        <FavoriteIcon />
      </IconButton>
      <IconButton className="swipe__icon Flash">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
