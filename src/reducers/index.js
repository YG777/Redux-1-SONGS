import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Bananas", duration: "5:05" },
    { title: "Onions and Tears", duration: "4:36" },
    { title: "Sweet Weekend Sleep", duration: "2:55" },
    { title: "How Much Is The Fish", duration: "6:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})