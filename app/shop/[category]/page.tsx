import Category from "./category";

export default function CategoryPage({params}: {params: {category: string}}){
    const {category} = params;
    return(
        <Category category={category}  />
    )
}