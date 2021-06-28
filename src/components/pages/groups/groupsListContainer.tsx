import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getGroupsListTC } from "../../../store/groupListReducer";

import { globalStateType } from "../../../store/store";
import { GroupListDrawer } from "./groupListDrawer";
import interactionPlugin from "@fullcalendar/interaction"

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



  return <GroupListDrawer {...props} />;
}

// ========================================


export const GroupListMainContainer = connector(GroupListCC);


