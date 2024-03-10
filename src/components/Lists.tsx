import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import PlaceDetails from '@/components/PlacesDetails';

interface ListProps {
  place: Place[];
}

interface Place {
  name: string;
  type: string;
}


const List: React.FC<ListProps> = ({ place }) => {
  const [type, setType] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  return (
    <div>
      {/* Heading  */}
      <div> Restaurants, Hotels & Attractions Around You</div>
      {/* Form for Selecting Restaurants, hotels, attractions */}
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value as string)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      {/* Form for filter based on the Rating */}
      <FormControl>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value as number)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={5}>
        {place?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;