import React from 'react';
import Card from './Card'
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

  constructor( props ){
    
    super( props );
    this.state ={ 
        items:[
          {
            id: 0,
            title: '',
            subTitle: '',
            imgSrc: '',
            link: '',
            selected: false,
          },
          {
            id: 1,
            title: '',
            subTitle: '',
            imgSrc: '',
            link: '',
            selected: false,
          },
          {
            id: 2,
            title: '',
            subTitle: '',
            imgSrc: '',
            link: '',
            selected: false,
          }
        ]
    }

  }

  // Functions
  handleCardClick = ( id, card ) => {
    let items = [ ...this.state.items ];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id != id){
        item.selected = false;
       }
    })

    this.setState(
      { items}
    );
  }

  // Function that creates the card component for each items in the array.
  makeItems = ( items ) => {
    return items.map( item => {
      return <Card item={ item } click={ (e => this.handleCardClick( item.id, e )) } key={ item.id }  />
    })
  }

  render(){
    return(
      <div>
        <Container maxWidth="xl">
          <Row className="justify-content-around">
            { this.makeItems( this.state.items ) }
          </Row>
        </Container>
      </div>
    );
  }

}


export default Carousel;