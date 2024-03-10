import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';
import Image from "next/image";
import Darkheader from "@/components/Darkheader";
import List from '@/components/Lists';
import { getPlaceData } from "@/pages/api/api";

interface Place {
  query: string;
}

const Home: React.FC = () => {
  const [Place, setPlace] = useState<Place[] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data: Place[] = await getPlaceData(
            position.coords.latitude,
            position.coords.longitude,
            'hotels'
          );
          setPlace(data);
          console.log("Getting the place in App.js file", data);
        } catch (error) {
          console.error('Error fetching place data:', error);
        }
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);
  

  return (
    <>
      <CssBaseline />
      <Darkheader />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={12}>
        {Place !== null ? (
  <List Place={Place} />
) : (
  <p>Loading place...</p>
)}

        </Grid>
      </Grid>
    </>
  );
};

export default Home;
