import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getGroupsListTC } from "../../../store/groupListReducer";

import { globalStateType } from "../../../store/store";
import { CalendarAndJornalDrawer } from "./groupListDrawer";

const mapStateToProps = (state: globalStateType) => {
  return {
    groupList: state.groupsPart.groups,
  }
};

const connector = connect(mapStateToProps, { getGroupsListTC })
export type groupListConectedType = ConnectedProps<typeof connector>

function GroupListCC(props: groupListConectedType) {

  useEffect(() => {
    props.getGroupsListTC();
  }, []);



  return <CalendarAndJornalDrawer {...props} />;
}

// ========================================


export const GroupListMainContainer = connector(GroupListCC);


