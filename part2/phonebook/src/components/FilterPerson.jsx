
const FilterPerson = ({ newSearch, setNewSearch }) => {
  // handler input search
  const handleInputSearch = (event) => {
    setNewSearch(event.target.value)
  }
  return (
    <div>
      <input
        value={newSearch}
        onChange={handleInputSearch}
      />
    </div>

  )
}

export default FilterPerson