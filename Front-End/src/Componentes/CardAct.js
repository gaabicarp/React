  import React from 'react';
  import Card from 'react-bootstrap/Card'
  import { Typography } from '@material-ui/core';

  class CardActivity extends React.Component{
      constructor(props){
          super(props)
      }

      render(){
        const Activity = this.props.store

          return(
        //     <Card>
        //     <Card.Img variant="top" src={`http://localhost:4000${Activity.imageAct}`} />
        //     <Card.Body>
        //   <Card.Title>{Activity.title}</Card.Title>
        //       <Card.Text>
        //         {Activity.description}
        //       </Card.Text>
        //     </Card.Body>
        //     <Card.Footer>
        //       <small className="text-muted">{Activity.adress} Price:{Activity.price}USD</small>
        //     </Card.Footer>
        //   </Card>
        <div className="CardImg">
            <div className="ActImg">
                <img src={`http://localhost:4000${Activity.imageAct}`}></img>
                <Typography variant="caption" color="textSecondary" component="p">
                {Activity.adress}
                </Typography>
            </div>
            <div>
                <div><h6>{Activity.title}</h6></div>
                <div>
                <Typography variant="caption" color="textSecondary" component="p">
                    {Activity.description}<br></br>
                </Typography>
                <Typography variant="subtitle2" color="textPrimary" component="p">
                Price: {Activity.price}USD
                </Typography>
                
                </div>

            </div>
        </div>

          )
      }
  }

  export default CardActivity;

  