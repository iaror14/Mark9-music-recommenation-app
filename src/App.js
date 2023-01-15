import React, { useState } from "react";
import "./styles.css";

var musicCollection = {
  Blues: [
    { song: "Slowly Blues", By: "Artist : Buddy Guy" },
    { song: "Dust My Room", By: "Artist : Robert Johnson" },
    { song: "Hoochie Koochie Man", By: "Artist: Muddy Waters" }
  ],

  HipHop: [
    { song: "A Milli", By: "Artist : Lil Wayne" },
    { song: "Passing Me By", By: "Artist : The Pharcyde" },
    { song: "Ms Jackson", By: "Artist : OutKast" }
  ],

  SoulMusic: [
    { song: "I Got You", By: "Artist : James Brown" },
    { song: "I'll be Around", By: "Artist : The Spinners" },
    { song: "A change is gonna come", By: "Artist : Sam Cooke" }
  ],
  CountryMusic: [
    { song: "Before He Cheats", By: "Artist : Carrie Underwood" },
    { song: "Jolene", By: "Artist : Dolly Parton" },
    { song: "The Dance", By: "Artist : Garth Brooks" }
  ]
};

export default function App() {
  var musicList = Object.keys(musicCollection);

  var [selectedgenre, selectGenre] = useState("Blues");

  function clickHandler(genre) {
    selectGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <img src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" />
        Music Recommendations{" "}
      </h1>
      <p>
        Want to check some of the music genres, click on the genre below to get
        started!
      </p>

      <div>
        {musicList.map((genre) => (
          <button onClick={() => clickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <p>
        {" "}
        -------------------------------------------------------------------------------------------------------{" "}
      </p>
      <div>
        <ul>
          {musicCollection[selectedgenre].map((clear) => (
            <li class="list-format" key={clear.song}>
              <div class="format-response"> {clear.song} </div>
              <div> {clear.By} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
