import React, { useState, useEffect } from 'react';

function HouseNav() {
  const [data, setData] = useState(null);
  const [houses, setHouses] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [apiUrl, setApiUrl] = useState(""); 

  const areaMapping = {
    "carlow": "110000",
    "carlow town": "110200",
    "graiguecullen": "110000",
    "tullow": "110500",
    "cavan": "110550",
    "cavan town": "111100",
    "bailieborough": "110600",
    "ballyconnell": "110800",
    "ballyjamesduff": "110900",
    "belturbet": "111000",
    "cootehill": "111200",
    "kingscourt": "111300",
    "virginia": "111500",
    "clare": "111600",
    "ennis": "111900",
    "killaloe": "112100",
    "kilrush": "112200",
    "newmarket-on-fergus": "112400",
    "shannon": "112700",
    "sixmilebridge": "112800",
    "cork": "113000",
    "cork city": "115200",
    "ballincollig": "113100",
    "ballintemple": "113200",
    "ballinure": "113000",
    "bandon": "113500",
    "bantry": "113600",
    "bishopstown": "113800",
    "blackpool": "113900",
    "blackrock, cork": "114000",
    "blarney": "114100",
    "carrigaline": "114300",
    "carrigtwohill": "114400",
    "castlemartyr": "114500",
    "charleville": "114700",
    "clonakilty": "114800",
    "cloyne": "114900",
    "cobh": "115000",
    "crosshaven": "115500",
    "douglas": "115700",
    "dunmanway": "115900",
    "fermoy": "116100",
    "frankfield": "113000",
    "glanmire": "116300",
    "kanturk": "116500",
    "kinsale": "116800",
    "macroom": "116900",
    "mallow": "117000",
    "midleton": "117100",
    "millstreet": "117200",
    "mitchelstown": "117300",
    "montenotte": "113000",
    "passage west": "117500",
    "rathcormac": "117600",
    "ringaskiddy": "113000",
    "rochestown": "113000",
    "skibbereen": "118200",
    "tivoli": "113000",
    "tower": "113000",
    "whitegate": "113000",
    "wilton": "118700",
    "youghal": "118800",
    "donegal": "118900",   
    "donegal town": "119800",
    "ballybofey": "119200",
    "buncrana": "119400",
    "bundoran": "119500",
    "carndonagh": "119600",
    "letterkenny": "120000",
    "lifford": "120100",
    "stranorlar": "120400",
    "dublin": "120500",
    "balbriggan": "120600",
    "blackrock": "120700",
    "booterstown": "120800",
    "dalkey": "121200",
    "donabate": "121300",
    "dun laoghaire": "121400",
    "glenageary": "121500",
    "howth": "121600",
    "killiney": "121700",
    "kinsealy": "121800",
    "lucan": "121900",
    "lusk": "122000",
    "malahide": "122100",
    "monkstown": "122200",
    "mount merrion": "122300",
    "portmarnock": "122400",
    "rathcoole": "122500",
    "rush": "122600",
    "saggart": "122700",
    "sandycove": "122800",
    "shankill": "122900",
    "skerries": "123000",
    "stillorgan": "123200",
    "swords": "123300",
    "i.f.s.c.": "123500",
    "parnell street": "123600",
    "spencer dock": "123700",
    "summerhill": "123800",
    "aungier street": "120500",
    "charlemont street": "124100",
    "grand canal dock": "120500",
    "grand canal square": "120500",
    "hanover quay": "124400",
    "lower mount street": "120500",
    "pearse street": "124600",
    "tara street": "120500",
    "temple bar": "124800",
    "townsend street": "124900",
    "clonliffe": "125200",
    "clontarf": "125300",
    "drumcondra": "125400",
    "east wall": "125500",
    "fairview": "125700",
    "marino": "125900",
    "north strand": "126000",
    "ballsbridge": "126200",
    "donnybrook": "126300",
    "irishtown": "126400",
    "merrion": "126500",
    "pembroke": "126600",
    "ringsend": "126700",
    "sandymount": "126800",
    "artane": "127000",
    "killester": "127400",
    "raheny": "127500",
    "dartry": "127800",
    "harolds cross": "127900",
    "milltown": "128000",
    "ranelagh": "128100",
    "rathgar": "128200",
    "rathmines": "128300",
    "templeogue": "128900",
    "terenure": "129000",
    "arbour hill": "129200",
    "cabra": "129300",
    "navan road": "120500",
    "north circular road": "129500",
    "phibsboro": "129600",
    "smithfield": "129700",
    "stoneybatter": "129800",
    "christchurch": "130000",
    "cork street": "130100",
    "dolphins barn": "120500",
    "inchicore": "130300",
    "islandbridge": "130400",
    "kilmainham": "130500",
    "portobello": "130600",
    "rialto": "130700",
    "south circular road": "130800",
    "the coombe": "130900",
    "dublin 9": "131000",
    "ballymun": "131100",
    "beaumont": "131200",
    "glasnevin": "131500",
    "santry": "131600",
    "whitehall": "131700",
    "ballyfermot": "131900",
    "cherry orchard": "132000",
    "finglas": "132300",
    "meakstown": "132300",
    "st margarets road": "132300",
    "crumlin": "132900",
    "drimnagh": "133000",
    "kimmage": "133100",
    "walkinstown": "133200",
    "baldoyle": "133500",
    "balgriffin": "133600",
    "clongriffin": "133900",
    "donaghmede": "134000",
    "sutton": "134200",
    "churchtown": "134400",
    "clonskeagh": "134500",
    "goatstown": "134700",
    "ashtown": "135100",
    "blanchardstown": "135200",
    "carpenterstown": "135200",
    "castleknock": "135400",
    "clonee": "135500",
    "clonsilla": "135600",
    "coolmine": "135600",
    "mulhuddart": "135900",
    "ongar": "136000",
    "porterstown": "136100",
    "royal canal park": "136200",
    "tyrrelstown": "136200",
    "ballinteer": "136500",
    "dundrum": "136600",
    "knocklyon": "136700",
    "rathfarnham": "136800",
    "malahide road": "137500",
    "northern cross": "137500",
    "cabinteely": "137900",
    "carrickmines": "138000",
    "foxrock": "138100",
    "leopardstown": "138300",
    "sandyford": "138600",
    "stepaside": "138900",
    "chapelizod": "139200",
    "palmerstown": "139300",
    "clondalkin": "139400",
    "ballycullen": "139600",
    "citywest": "139700",
    "firhouse": "139800",
    "tallaght": "140100",
    "galway": "140200",
    "galway city": "141600",
    "athenry": "140300",
    "ballinasloe": "140400",
    "ballybane": "140500",
    "ballybrit": "140600",
    "barna": "140800",
    "bohermore": "140900",
    "claregalway": "141000",
    "clifden": "141200",
    "doughiska": "141400",
    "gort": "141700",
    "headford": "141800",
    "knocknacarra": "141800",
    "loughrea": "142000",
    "mervue": "142300",
    "monivea": "142300",
    "moycullen": "142300",
    "newcastle": "142400",
    "oranmore": "142500",
    "oughterard": "142600",
    "portumna": "142700",
    "rahoon": "142800",
    "renmore": "142800",
    "roscam": "142800",
    "salthill": "143100",
    "tuam": "143200",
    "wellpark": "143200",
    "woodquay": "143200",
    "kerry": "143500",
    "castleisland": "143700",
    "dingle": "143800",
    "kenmare": "143900",
    "killarney": "144000",
    "killorglin": "144100",
    "listowel": "144200",
    "tralee": "144500",
    "kildare": "144600",
    "kildare town": "145400",
    "athy": "144700",
    "castledermot": "144800",
    "celbridge": "144900",
    "clane": "145000",
    "kilcock": "145200",
    "kilcullen": "145300",
    "kill": "145500",
    "leixlip": "145600",
    "maynooth": "145700",
    "monasterevin": "145800",
    "naas": "145900",
    "newbridge": "146000",
    "rathangan": "146200",
    "sallins": "146300",
    "kilkenny": "146500",
    "kilkenny city": "147200",
    "callan": "146700",
    "castlecomer": "146800",
    "freshford": "146900",
    "kells": "146500",
    "thomastown": "147400",
    "laois": "147600",
    "mountmellick": "148500",
    "mountrath": "148600",
    "portarlington": "148700",
    "portlaoise": "148800",
    "leitrim": "149100",
    "carrick-on-shannon": "149300",
    "manorhamilton": "149900",
    "limerick": "150100",
    "limerick city": "151900",
    "abbeyfeale": "150200",
    "annacotty": "150400",
    "castleconnell": "150900",
    "castletroy": "151000",
    "corbally": "151100",
    "dock road": "151300",
    "dooradoyle": "151400",
    "glen": "150100",
    "kilmallock": "151700",
    "newcastle west": "152000",
    "old cratloe road": "150100",
    "raheen": "152200",
    "longford": "152400",
    "longford town": "153100",
    "ballymahon": "152500",
    "edgeworthstown": "152800",
    "newtownforbes": "153200",
    "louth": "153300",
    "ardee": "153400",
    "drogheda": "154000",
    "termonfeckin": "153300",
    "clogherhead": "153300",
    "baltray": "153300",
    "dundalk": "154200",
    "louth town": "153300",
    "mayo": "154900",
    "ballina": "155100",
    "ballinrobe": "155200",
    "ballyhaunis": "155300",
    "belmullet": "155400",
    "castlebar": "155500",
    "charlestown": "155600",
    "claremorris": "155700",
    "foxford": "155900",
    "swinford": "156400",
    "westport": "156500",
    "meath": "156600",
    "ashbourne": "156700",
    "athboy": "156800",
    "bettystown": "157000",
    "clonee, meath": "157100",
    "drogheda, meath": "157200",
    "duleek": "157300",
    "dunboyne": "157400",
    "dunshaughlin": "157500",
    "enfield": "157600",
    "kells, meath": "157700",
    "laytown": "157800",
    "navan": "158100",
    "ratoath": "158300",
    "stamullen": "158500",
    "trim": "158700",
    "monaghan": "158800",
    "ballybay": "158900",
    "carrickmacross": "159000",
    "castleblayney": "159100",
    "monaghan town": "159300",
    "offaly": "159400",
    "banagher": "159500",
    "birr": "159600",
    "clara": "159700",
    "edenderry": "159900",
    "tullamore": "160100",
    "roscommon": "160200",
    "roscommon town": "161000",
    "athlone": "160300",
    "ballaghaderreen": "160400",
    "boyle": "160600",
    "castlerea": "160800",
    "strokestown": "161100",
    "sligo": "161200",
    "sligo town": "162200",
    "ballinode": "161300",
    "ballisodare": "161400",
    "ballymote": "161500",
    "ballytivnan": "161500",
    "collooney": "161800",
    "lough gill": "161800",
    "strandhill": "162300",
    "tubbercurry": "162400",
    "tipperary": "162500",
    "tipperary town": "163900",
    "ballina, tipperary": "162600",
    "cahir": "162800",
    "carrick-on-suir": "162900",
    "cashel": "163000",
    "clonmel": "163100",
    "fethard": "163300",
    "nenagh": "163400",
    "roscrea": "163600",
    "templemore": "163700",
    "thurles": "163800",
    "waterford": "164000",
    "waterford city": "167100",
    "ballytruckl": "164000",
    "canada street": "164000",
    "castle place": "164000",
    "cork road": "164700",
    "dungarvan": "164800",
    "dunmore east": "164900",
    "dunmore road": "165000",
    "ferrybank": "165200",
    "inner ring road": "165400",
    "johns hill": "165500",
    "lismore": "165900",
    "mary street": "165900",
    "penrose lane": "166200",
    "poleberry": "166300",
    "portlaw": "166400",
    "railway square": "166400",
    "scotch quay": "166400",
    "templars hall": "166800",
    "tramore": "166900",
    "westmeath": "167300",
    "athlone, westmeath": "167400",
    "castlepollard": "167500",
    "kilbeggan": "167700",
    "kinnegad": "167900",
    "moate": "168000",
    "mullingar": "168100",
    "wexford": "168200",
    "bunclody": "168300",
    "clonard": "168500",
    "enniscorthy": "168600",
    "ferns": "168700",
    "ford": "168700",
    "gorey": "168900",
    "mulgannon": "169000",
    "new ross": "169100",
    "rosslare": "169200",
    "wicklow": "169300",
    "wicklow town": "171200",
    "arklow": "169400",
    "baltinglass": "169700",
    "blessington": "169900",
    "bray": "170000",
    "delgany": "170200",
    "greystones": "170500",
    "kilcoole": "169300",
    "newtownmountkennedy": "170700",
    "rathnew": "170900"
  }
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
