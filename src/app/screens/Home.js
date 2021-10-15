// React
import React from "react";
import { makeStyles } from "@mui/styles";

// Components
import AnnouncementsComponent from "app/components/Announcements";
import MemberFeedComponent from "app/components/MemberFeed";
import ListMembersComponent from "app/components/ListMembers";
import CalendarComponent from "app/components/Calendar";
import ChartsComponent from "app/components/Charts";

const styles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: theme.spacing(2),
  },
  componentContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  memberFeedContainer: {
    gridRow: 2,
    backgroundColor: theme.palette.primary.main,
  },
}));

const HomeScreen = () => {
  const { gridContainer, componentContainer, memberFeedContainer } = styles();
  return (
    <div className='test'>
      <div>This is the home screen!</div>
      <div className={gridContainer}>
        <div className={memberFeedContainer}>
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
      </div>
    </div>
  );
};

export default HomeScreen;
