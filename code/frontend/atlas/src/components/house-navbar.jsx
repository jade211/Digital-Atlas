import React, { useState, useEffect } from 'react';

function HouseNav() {
  const [data, setData] = useState(null);
  const [houses, setHouses] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [apiUrl, setApiUrl] = useState(""); 

  const areaMapping = {
    "carlow": "110000",
    "cavan": "110550",
    "clare": "111600",
    "cork": "113000",
    "donegal": "118900",
    "dublin": "120500",
    "balbriggan, dublin": "120600",
    "blackrock, dublin": "120700",
    "booterstown, dublin": "120800",
    "cabinteely, dublin": "120900",
    "citywest, dublin": "121000",
    "dalkey, dublin": "121200",
    "donabate, dublin": "121300",
    "dun laoghaire, dublin": "121400",
    "glenageary, dublin": "121500",
    "howth, dublin": "121600",
    "killiney, dublin": "121700",
    "kinsealy, dublin": "121800",
    "lucan, dublin": "121900",
    "lusk, dublin": "122000",
    "malahide, dublin": "122100",
    "monkstown, dublin": "122200",
    "mount merrion, dublin": "122300",
    "portmarnock, dublin": "122400",
    "rathcoole, dublin": "122500",
    "rush, dublin": "122600",
    "saggart, dublin": "122700",
    "sandycove, dublin": "122800",
    "shankill, dublin": "122900",
    "skerries, dublin": "123000",
    "stepaside, dublin": "123100",
    "stillorgan, dublin": "123200",
    "swords, dublin": "123300",
    "dublin 1": "123400",
    "dublin 2": "123900",
    "dublin 3": "125000",
    "dublin 4": "126100",
    "dublin 5": "126900",
    "dublin 6": "127600",
    "dublin 6W": "128600",
    "dublin 7": "129100",
    "dublin 8": "129900",
    "dublin 9": "131000",
    "dublin 10": "131800",
    "dublin 11": "132100",
    "dublin 12": "132700",
    "dublin 13": "133300",
    "dublin 14": "134300",
    "dublin 15": "135000",
    "dublin 16": "136400",
    "dublin 17": "137100",
    "dublin 18": "137800",
    "dublin 20": "139100",
    "dublin 24": "139500",
    "galway": "140200",
    "kerry": "143500",
    "kildare": "144600",
    "laois": "147600",
    "leitrim": "149100",
    "limerick": "150100",
    "longford": "150100",
    "louth": "153300",
    "drogheda": "154000",
    "dundalk": "154200",
    "meath": "156600",
    "monaghan": "158800",
    "offaly": "159400",
    "roscommon": "160200",
    "sligo": "161200",
    "tipperary": "162500",
    "waterford": "164000",
    "westmeath": "167300",
    "wexford": "168200",
    "wicklow": "169300",
  };

  useEffect(() => {
    // Fetch data for the housing prices
    const fetchHousesData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/house/?area=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchHousesData();
    }
  }, [searchTerm]);

  const formatHouseData = () => {
    if (!data) return '';
    const value = data?.result?.value[0];
    if (!value) return 'Value not found in data.';
    return `Average Rent Cost: €${value}`;
  };

  const displayHouse = () => {

    const filteredHouses = houses.filter(
      (house) =>
        house.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.year.toString().includes(searchTerm) ||
        house.price.toString().includes(searchTerm)
    );

    return filteredHouses.map((house) => (
      <div key={house.id}>
        <p><strong>Year:</strong> {house.year}</p>
        <p><strong>Area:</strong> {house.area}</p>
        <p><strong>Average Home Cost:</strong> {house.price}</p>
      </div>
    ));
  };

  const generateApiUrl = (id1, id2, id3, id4, categoryIndex) => {
    const apiUrl = `https://ws.cso.ie/public/api.jsonrpc?data=${encodeURIComponent(JSON.stringify({
      "jsonrpc": "2.0",
      "method": "PxStat.Data.Cube_API.ReadDataset",
      "params": {
        "class": "query",
        "id": [id1, id2, id3, id4],
        "dimension": {
          [id1]: {
            "category": {
              "index": ["2022"]
            }
          },
          [id2]: {
            "category": {
              "index": ["-"]
            }
          },
          [id3]: {
            "category": {
              "index": ["-"]
            }
          },
          [id4]: {
            "category": {
              "index": [categoryIndex]
            }
          }
        },
        "extension": {
          "pivot": null,
          "codes": true,
          "language": {
            "code": "en"
          },
          "format": {
            "type": "JSON-stat",
            "version": "2.0"
          },
          "matrix": "RIA02"
        },
        "version": "2.0"
      }
    }))}`;
  
    return apiUrl;
  };

  const handleSearch = () => {
    setSearchTerm(areaInput); 

    const areaCode = areaMapping[areaInput];
    const generatedApiUrl = generateApiUrl("TLIST(A1)", "C02970V03592", "C02969V03591", "C03004V03625", areaCode);
    setApiUrl(generatedApiUrl);

    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(generatedApiUrl);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  };

  return (
    <div>
      <h1>Housing and Rent Prices</h1>
      <div>
        <label htmlFor="searchTerm">Search by Area:</label>
        <input
          type="text"
          id="searchTerm"
          value={areaInput}
          onChange={(e) => setAreaInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {displayHouse()}
      <div>
        <pre>{formatHouseData()}</pre>
      </div>
    </div>
  );
}

export default HouseNav;
