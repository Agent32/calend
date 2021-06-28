import { Card } from "react-bootstrap";
import { person } from "../../store/types/storeTypes";
import personalListStyle from "./personalListStyle.module.scss";
type withData<Type> = { data: Type }

export const PersonListDrawer = (props: withData<Array<person>>) => {
  const personeListDrawer = props.data.map((current) => {
    return (
      <div>
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src={current.img} />
          <Card.Body>
            <Card.Title>{current.firstName} {current.lastName}</Card.Title>

            <Card.Text>
              <a href={`mailo:${current.email}`} >Mail </a>
              <a href={`tel:${current.phone}`} >Phone </a> <br />
              Room:  {current.room}<br />
              Position: {current.classification}<br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  })
  return (
    <div  className={personalListStyle.main}> {personeListDrawer}</div>
  )
}