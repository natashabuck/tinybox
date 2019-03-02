import React, { Component } from "react";
import { HeartIcon } from "react-octicons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class MapCard extends Component {
  defaultName() {
    return this.props.venue.name
      ? this.props.venue.name
      : "Select Pin to View Details";
  }

  defaultAddress() {
    return this.props.venue.address
      ? `${this.props.venue.address}, ${this.props.venue.city} ${
          this.props.venue.postcode
        }`
      : null;
  }

  displayIcons() {
    return this.props.venue.id ? (
      <div>
        <HeartIcon height={45} width={55} />
        <Button variant="primary">Book</Button>
      </div>
    ) : null;
  }

  render() {
    return (
      <Card className="cardDetail">
        <div className="cardDetailImg" />
        <Card.Body>
          <Card.Title id="cardDetailTitle">{this.defaultName()}</Card.Title>
          <Card.Subtitle>{this.defaultAddress()}</Card.Subtitle>
          <Card.Text id="detail">{this.props.venue.listing_text}</Card.Text>
          <Card.Text>{this.displayIcons()}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
