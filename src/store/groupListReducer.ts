import { mainGroupListType, getActionTypes } from './types/storeTypes'

import * as actions from './actions/groupListActions'
import { Dispatch } from 'react'
import { serverAL } from '../api/api'



type GroupsActionTypes = ReturnType<getActionTypes<typeof actions>>

const init: mainGroupListType = {
  groups: [
    {
      id: 'load',
      name: 'bor',
      avatar: 'link',
      startDate: 'load',
      gitLink: 'load',
      groupProfile: 'load',
      calendar: [
        {
          id: '1',
          groupId: '1',
          title: 'Lection1',
          date: '2021-06-07',
          start: '2021-06-07T16:10:00'
        },
        {
          id: '2',
          groupId: '1',
          title: 'Lection2',
          date: '2021-06-01',
          start: '2021-06-01T15:20:00'
        }
      ],

      mentor: {
        id: 'load',
        classification: 'mentor',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        phone: 'string',
        room: 'string',
        img: 'pick',
      },
      userList: [
        {
          id: 'load',
          classification: 'intern',
          firstName: 'string',
          lastName: 'string',
          email: 'string',
          phone: 'string',
          room: 'string',
          img: 'pick',
        },
      ],
    },
  ],
  groupsSettings: {
    test: 'load',
  },
}
// ========================================
//
export function groupsListReducer(
  state: mainGroupListType = init,
  action: GroupsActionTypes
): mainGroupListType {
  switch (action.type) {
    // --------------

    case 'SET-GROUPS-LIST/group-list-type': {
      return {
        ...state,
        groups: [...action.data],
      }
    }

    // --------------
    default:
      return state
  }
}
// ========================================

// ========================================
export const getGroupsListTC =
  () => async (dispatch: Dispatch<GroupsActionTypes>) => {
    try {
      const groupAnswData = await serverAL.getGroupList()

      dispatch(actions.setGroupList(groupAnswData))
    } catch (err) {
      console.log(err)
    }
  }
