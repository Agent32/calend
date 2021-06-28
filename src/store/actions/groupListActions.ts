import { groupType } from "../types/storeTypes";


export const setGroupList = (data:Array <groupType>) => ({
  type: 'SET-GROUPS-LIST/group-list-type',
  data
}as const)
// --------------

