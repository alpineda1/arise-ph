// React
import React from "react";

// Material
import { Container } from "@mui/material";

// Styles
import HomeStyles from "./Home.style";

// Components
import AnnouncementsComponent from "app/components/Announcements";
import MemberFeedComponent from "app/components/MemberFeed";
import ListMembersComponent from "app/components/ListMembers";
import CalendarComponent from "app/components/Calendar";
import ChartsComponent from "app/components/Charts";

const HomeScreen = () => {
  const { gridContainer, componentContainer, memberFeedContainer } =
    HomeStyles();

  return (
    <div className="test">
      <Container className={gridContainer} maxWidth="lg">
        <div className={`${componentContainer} ${memberFeedContainer}`}>
          <MemberFeedComponent />
        </div>
        <div className={componentContainer}>
          <AnnouncementsComponent />
        </div>
        <div className={componentContainer}>
          <CalendarComponent />
        </div>
        <div className={componentContainer}>
          <ListMembersComponent />
        </div>
        <div className={componentContainer}>
          <ChartsComponent />
        </div>
      </Container>
    </div>
  );
};

export default HomeScreen;
