type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

interface UserInterface2 {
    id: ID
    name: string
    surname: string
}

const pupularTages: PopularTag[] = ["dragon", "coffee"]

let username: string = "alex";

let pagename: string | number = "1";

let errorMessage: string | null = null;