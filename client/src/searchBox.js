import React, { useState } from "react";
import ReactSearchBox from "react-search-box";


const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const data = [
    { key: "john", value: "John Doe" },
    { key: "jane", value: "Jane Doe" },
    { key: "mary", value: "Mary Phillips" },
    { key: "robert", value: "Robert" },
    { key: "karius", value: "Karius" },
    { key: "karius", value: "Karius" },
    { key: "karius", value: "Karius" }
  ];

  const handleSelect = (record) => {
  

    setSearchValue(record.value);
  
  };
  console.log("value is:",searchValue); // Log the selected record for debugging
  return (
    <div>
      <ReactSearchBox
        placeholder="Search..."
        value={searchValue}
        data={data}
        callback={handleSelect}
        onChange={setSearchValue} // Keep the input state in sync with user typing
      />
      <p>Selected Value: {searchValue}</p>
    </div>
  );
};

export default Search;

