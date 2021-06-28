import axios from 'axios'
import { groupType, serverResponse } from '../store/types/storeTypes'

//import { invoiceType } from '../store/types/storeTypes';
//https://mockapi.io/projects/60d5f509943aa60017768d24
//https://60d5f509943aa60017768d23.mockapi.io/groups

const instanceMock = axios.create({
  baseURL: 'https://60d5f509943aa60017768d23.mockapi.io',
})

type serverType = {
  getCountiesCovidList: Function
  getGroupList: Function
}

export const serverAL: serverType = {
  getCountiesCovidList: () => {
    return instanceMock
      .get<serverResponse>(``)

      .then((res) => {
        return res.data.Countries
      })
  },
  getGroupList: () => {
    return instanceMock.get<Array<groupType>>('/groups').then((res) => {
      return res.data
    })
  },
}
