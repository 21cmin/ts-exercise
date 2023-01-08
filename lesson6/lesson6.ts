const addId = <T extends Object>(obj: T) => {
  const id = Math.random().toString(16)
  return { ...obj, id }
}


interface UserInterface4<T, V> {
  name: string
  data: T
  meta: V
}

const me: UserInterface4<{ meta: string }, string> = {
  name: "jack",
  data: { meta: "foo" },
  meta: 'bar'
}

const me2: UserInterface4<string[], string> = {
  name: 'Jogn',
  data: ['foo', 'bar', 'bax'],
  meta: 'bar'
}

const result = addId<UserInterface4<{ meta: string }, string>>(me)
console.log("result:", result);
