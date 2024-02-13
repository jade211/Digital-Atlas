
// import React, { useState } from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Navbar from './navbar';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (area) => {
//     setSearchTerm(area);
//   };
//   <Navbar />
//   return (
//       <div>
//         <div>
//           <label htmlFor="searchTerm" className="form-label">
//             Search by Area:
//           </label>
//           <input
//             type="text"
//             id="searchTerm"
//             className="form-control"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={() => handleSearch(searchTerm)}>Search</button>
//         </div>
//         <Amenities searchTerm={searchTerm} />
//         <Crime searchTerm={searchTerm} />
//       </div>
    
//   );
// }

// export default AreaSearch;



// import React, { useState } from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     // Check if the searchTerm is not empty before calling components
//     if (searchTerm.trim() !== '') {
//       return (
//         <div>
//           {/* <Amenities searchTerm={searchTerm} />
//           <Schools searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
//           <Transport searchTerm={searchTerm} /> */}
//           <House searchTerm={searchTerm} />
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Area:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {handleSearch()}
//     </div>
//   );
// }

// export default AreaSearch;







// 
















// import React, { useState } from 'react';
// import Amenities from './amenities';
// import Crime from './crime';
// import Schools from './school';
// import Transport from './transportation';
// import House from './house';

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);

//   const handleSearch = () => {
//     setSearchButtonClicked(true);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="searchTerm" className="form-label">
//           Search by Area:
//         </label>
//         <input
//           type="text"
//           id="searchTerm"
//           className="form-control"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {searchButtonClicked && searchTerm.trim() !== '' && (
//         <div>
//           <Amenities searchTerm={searchTerm} />
//           <Schools searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
//           <Transport searchTerm={searchTerm} /> 
//           <House searchTerm={searchTerm} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AreaSearch;








import React, { useState, useEffect} from 'react';
import Amenities from './amenities';
import Crime from './crime';
import Schools from './school';
import Transport from './transportation';
import House from './house';

function AreaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleSearch = () => {
    setSearchButtonClicked(true);
  };

  useEffect(() => {
    // Triggering the components

    // Reset the search button state after a short delay (e.g., 100 milliseconds)
    const resetSearchButton = setTimeout(() => {
      setSearchButtonClicked(false);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(resetSearchButton);
  }, [searchTerm]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <div>
          <label htmlFor="searchTerm" className="form-label">
            Search by Area:
          </label>
          <input
            type="text"
            id="searchTerm"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {searchButtonClicked && searchTerm.trim() !== '' && (
          <>
            <Amenities searchTerm={searchTerm} />
            <Schools searchTerm={searchTerm} />
            <Crime searchTerm={searchTerm} />
          </>
        )}
      </div>
      <div style={{ flex: 1 }}>
        {searchButtonClicked && searchTerm.trim() !== '' && <House searchTerm={searchTerm} />}
        <br></br>
        {searchButtonClicked && searchTerm.trim() !== '' && <Transport searchTerm={searchTerm} />}
      </div>
    </div>
  );
}

export default AreaSearch;


