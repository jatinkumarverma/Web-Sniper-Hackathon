import React, { FC } from 'react';

interface PlaceDetailsProps {
  place: {
    name: string;
  };
}

const PlaceDetails: FC<PlaceDetailsProps> = ({ place }) => {
  return (
    <div className='card'>
      <div className="img">
        {/* Image goes here */}
      </div>
      <div className="card-content">
        <div className="name">
          <h1>{place.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;