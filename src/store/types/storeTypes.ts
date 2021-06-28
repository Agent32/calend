export type getActionTypes<T> = T extends { [key: string]: infer U } ? U : never


//-------------------------------------
export type person = {
  id: string
  classification: 'intern' | 'mentor' | 'lector'
  firstName: string
  lastName: string
  email: string
  phone: string
  img: string
  room: string
}
//-------------------------------------
export type calendarType = {
  id: string
  groupId: string
  title: string
  date: string
}


export type groupType = {
  id: string
  name: string
  avatar: string
  startDate: string
  gitLink: string
  groupProfile: string
  calendar: Array<calendarType>
  mentor: person
  userList: Array<person>
}

export type mainGroupListType =
  {
    groups: Array<groupType>,
    groupsSettings: {test:string}
}