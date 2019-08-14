import React from 'react';
import {Card, CardBody, CardHeader, CardFooter, Col, Row, Button, Badge,} from "reactstrap";
import './style/index.css'
import PropTypes from 'prop-types'

const CardDashboard =({ data , more, getBadge, handleDislike, handleLike, handleMoreUsers })=> {
  return(
    <div className="animated fadeIn">
      <Row>
        <Col xl={12} md={12}>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Usuarios
            </CardHeader>
            <CardBody>
              <Row className={"Container_Card"}>
                {data.slice(0,more).map((user) => {
                  return(
                    <Card key={user.id} className={"Card"}>
                      <div style={{ padding : 12,}}>
                        <div style={{ flexDirection : 'row', display : 'flex', alignItems : 'center' }}>
                          <img src={user.img} alt="Avatar" style={{ width : 80, height : 80 }}/>
                          <h5>{user.name}</h5>
                        </div>
                        <Badge color={getBadge(user.status)} className={"mr-3"}>{user.status}</Badge>
                        <span>{user.role}</span>
                      </div>

                      <CardFooter className={"Card_Footer"}>
                        <Button onClick={()=>handleLike(user.id)}    outline color={"success"}><i className="fa fa-thumbs-up fa-lg mr-2"></i>{user.like}</Button>
                        <Button onClick={()=>handleDislike(user.id)} outline color={"danger"}><i className="fa fa-thumbs-down fa-lg mr-2"></i>{user.dislike}</Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </Row>

              {data.length - more === 0
                ? null
                :
                <div style={{ display : 'flex', justifyContent : 'center', marginTop : 24 }}>
                  <Button onClick={()=>handleMoreUsers()} outline color={"primary"}>VER MAS USUARIOS {data.length - more}</Button>
                </div>
              }

            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

CardDashboard.propTypes = {
  handleMoreUsers : PropTypes.func,
  handleDislike   : PropTypes.func,
  handleLike      : PropTypes.func,
  getBadge        : PropTypes.func,
  more            : PropTypes.number,
  data            : PropTypes.array,
};

export default CardDashboard;
