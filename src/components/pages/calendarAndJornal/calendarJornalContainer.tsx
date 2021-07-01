import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { globalStateType } from "../../../store/store";
import { groupListConectedType } from "../groups/groupsListContainer";
import { CalendarAndJornalDrawer } from "./calendarJornalDrawer";

const mapStateToProps = (state: globalStateType) => {
  return {
    groupList: state.groupsPart.groups,
  }
};

const connector = connect(mapStateToProps, {})

function GroupListCC(props: groupListConectedType) {

  useEffect(() => {
  }, []);



  return <CalendarAndJornalDrawer {...props} />;
}

// ========================================


export const JournalMainContainer = connector(GroupListCC);


