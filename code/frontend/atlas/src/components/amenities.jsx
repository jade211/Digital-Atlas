import React, {useState, useEffect} from 'react';

function Amenities() {
  // return (
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://failteireland.azure-api.net/opendata-api/v1/attractions')
      .then((response) => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    }, []);

    return (
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading......'}
      </div>
    );
}

export default Amenities;