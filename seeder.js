const mongoose = require("mongoose");
const { DATABASE_URL } = require("./configs/database");

const Artist = require("./models/artist");
const PopularSong = require("./models/popularSong");
const Song = require("./models/song");

const songs = require("./data/songs.json");
const popularSongs = require("./data/popular_songs.json");
const artists = require("./data/artists.json");

(async () => {
  try {
    console.log("Connecting to database ...");
    mongoose.connect(DATABASE_URL);

    const database = mongoose.connection;

    database.on("connected", () => {
      console.log("Database connected.");
    });

    const seed = async () => {
      try {
        await Artist.insertMany(artists);
        await PopularSong.insertMany(popularSongs);
        await Song.insertMany(songs);
        
        console.log("Database has been successfully created");
      } catch (error) {
        console.log("Error during operation:", error.message);
      }
    };

    seed().then(() => {
      database.close();
    });
  } catch (error) {
    console.log(error);
  }
})();
