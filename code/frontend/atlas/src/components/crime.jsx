import React, {useState, useEffect} from 'react';

function Crime() {
  // return (
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/CJQ06/JSON-stat/2.0/en')
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

export default Crime;