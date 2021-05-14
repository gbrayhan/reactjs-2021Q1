import {useHistory, useLocation} from "react-router-dom"

const Categories = () => {
  const location = useLocation();
  const history = useHistory()
  const query = new URLSearchParams(location.search)
  const skip = query.get("skip") || "0"
  const limit = query.get("limit") || "10"

  const handleNext = () => {
    query.set("skip", (parseInt(skip) + 5).toString())
    query.set("limit", limit)
    history.push({search: query.toString()})
  }

  return (
    <div>
      <h1>Categories Page</h1>
      <h2>Skip: {skip}</h2>
      <h2>Limit: {limit}</h2>
      <button onClick={() => handleNext()}>Next</button>
    </div>
  )
}

export default Categories;