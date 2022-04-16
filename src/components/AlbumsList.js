import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { get } from "../utils/api";

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState("");
  const artistID = window.location.pathname.split("/").pop();

  const getAlbums = async (e) => {
    const API_URL = `https://api.spotify.com/v1/artists/${encodeURIComponent(
      artistID
    )}/albums`;
    const API_URL_ARTIST = `https://api.spotify.com/v1/artists/${encodeURIComponent(
      artistID
    )}`;
    const result = await get(API_URL);
    const artist_result = await get(API_URL_ARTIST);
    setArtist(artist_result);
    setAlbums(result);
  };

  getAlbums();

  return (
    <React.Fragment>
      <div className="album-page">
        <h1 className="albums-header">Spotify Artist Search</h1>
        <div className="albums-container">
          <h2>{artist.name}</h2>
          <h4>Albums</h4>
          {Object.keys(albums).length > 0 && (
            <div className="albums">
              {albums.items.map((album, index) => {
                return (
                  <React.Fragment key={index}>
                    <div>
                      <Card
                        style={{ width: "15rem", height: "450px" }}
                        className="card.album"
                      >
                        <Card.Img
                          variant="top"
                          src={album.images[0].url}
                          alt=""
                        />
                        <Card.Body>
                          <Card.Title>{album.name}</Card.Title>
                          <Card.Text>
                            {album.artists.map((artist) => {
                              return artist.name + " ";
                            })}
                          </Card.Text>
                          <Card.Text className="release-text">
                            {album.release_date}
                          </Card.Text>
                          <Card.Text className="tracks-text">
                            {album.total_tracks + " tracks"}
                          </Card.Text>
                          <a
                            className="album-link"
                            target="_blank"
                            href={album.external_urls.spotify}
                            rel="noreferrer"
                          >
                            <Card.Footer>Preview on Spotify</Card.Footer>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlbumsList;
