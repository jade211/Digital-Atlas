
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

// function AreaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     // Check if the searchTerm is not empty before calling components
//     if (searchTerm.trim() !== '') {
//       return (
//         <div>
//           <Amenities searchTerm={searchTerm} />
//           <Crime searchTerm={searchTerm} />
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




import React, { useState } from 'react';
import Amenities from './amenities';
import Crime from './crime';
import Schools from './school';
import Transport from './transportation';

function AreaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div>
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
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      {searchClicked && (
        <div>
          <Amenities searchTerm={searchTerm} />
          <Schools searchTerm={searchTerm} />
          <Crime searchTerm={searchTerm} />
          {/* <Transport searchTerm={searchTerm} /> */}
        </div>
      )}
    </div>
  );
}

export default AreaSearch;