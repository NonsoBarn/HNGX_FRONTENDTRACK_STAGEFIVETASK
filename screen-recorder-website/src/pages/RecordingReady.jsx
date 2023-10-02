import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/api";
import RRbottom from "../components/RRbottom";
import RRtop from "../components/RRtop";

export const RecordingReady = () => {
  // const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  let id = "screen-recording_kr8i1h";

  useEffect(() => {
    // Fetching movie details from TMDB API using the 'id' parameter
    axiosInstance
      .get(`/api/${id}`)
      .then((response) => {
        setVideoDetails(response.data.data);
        console.log(videoDetails);
        console.log(id);
        // setLoading(false);
      })
      .catch((error) => {
        // setError("Request failed: Could not get movie details data.");
        // setLoading(false);
        console.log("error encountered");
      });
  }, [id]);

  return (
    <div>
      <RRtop videoDetails={videoDetails} />
      <RRbottom />
    </div>
  );
};
