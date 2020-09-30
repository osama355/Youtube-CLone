import React from "react";
import Row from "./Row";
import Subscription from './Subscription';
import Gaming from './Gaming';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar" id="style1">
      <Row selected Icon={HomeIcon} props="Home" />
      <Row Icon={WhatshotIcon} props="Trending" />
      <Row Icon={SubscriptionsIcon} props="Subscription" />
      <hr />
      <Row Icon={VideoLibraryIcon} props="Library" />
      <Row Icon={HistoryIcon} props="History" />
      <Row Icon={OndemandVideoIcon} props="Your videos" />
      <Row Icon={WatchLaterIcon} props="Watch Later" />
      <Row Icon={ThumbUpIcon} props="Liked videos" />
      <hr />
      <Subscription/>
      <hr/>
      <Gaming/>
    </div>
  );
}



export default Sidebar;
