import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Link to={`/albums/${artist.id}`}>
                  <div>
                    <Card style={{ width: "15rem" }}>
                      {!_.isEmpty(artist.images) ? (
                        <Card.Img
                          variant="top"
                          src={artist.images[0].url}
                          alt=""
                        />
                      ) : (
                        <img alt="" />
                      )}
                      <Card.Body>
                        <Card.Title>{artist.name}</Card.Title>
                        <Card.Text className="followers">
                          {artist.followers.total} followers
                        </Card.Text>
                        <Rating
                          initialValue={artist.popularity / 20}
                          allowHalfIcon="true"
                          readonly="true"
                          size="23px"
                        >
                          {" "}
                        </Rating>
                      </Card.Body>
                    </Card>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default ArtistsList;
