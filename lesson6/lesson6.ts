const addId = <T>(obj: T) => {
  const id = Math.random().toString(16)
  return { ...obj, id }
}

const me = {
  name: "jack"
}

const result = addId(me)
console.log("result:", result);
