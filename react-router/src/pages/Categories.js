import {useLocation} from "react-router-dom"

const Categories = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  console.log(query)

  const skip = query.get("skip")
  const limit = query.get("limit")

  return (
    <div>
      <h1>Categories Page</h1>
      <h2>Skip: {skip}</h2>
      <h2>Limit: {limit}</h2>
    </div>
  )
}

export default Categories;