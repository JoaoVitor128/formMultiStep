
const UseForm = ({ data, updateFieldHandler}) => {
  return (
    <>
      <div className="formControl">
        <label htmlFor="name">Nome:</label>
        <input type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
           />
      </div>
      <div className="formControl">
        <label htmlFor="name">Email:</label>
        <input type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
      </div>
    </>
  )
}

export default UseForm
