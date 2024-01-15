import React, {useState, useEffect} from 'react';

function Transport() {
  // return (
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://ws.cso.ie/public/api.jsonrpc?data=%7B%22jsonrpc%22:%222.0%22,%22method%22:%22PxStat.Data.Cube_API.ReadDataset%22,%22params%22:%7B%22class%22:%22query%22,%22id%22:%5B%5D,%22dimension%22:%7B%7D,%22extension%22:%7B%22pivot%22:null,%22codes%22:false,%22language%22:%7B%22code%22:%22en%22%7D,%22format%22:%7B%22type%22:%22JSON-stat%22,%22version%22:%222.0%22%7D,%22matrix%22:%22THA24%22%7D,%22version%22:%222.0%22%7D%7D')
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

export default Transport;