interface SelectProps {
  labelName: string;
  items: string[]
}

export default function Select({labelName, items}: SelectProps) {
  return (
    <form>
      <label htmlFor={labelName}>{labelName}</label>
      <select id={labelName}>
        {items.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </form>
  )
}