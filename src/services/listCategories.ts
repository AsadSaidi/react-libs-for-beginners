const listCategories = async() => {
    const response= await fetch('/db/categories.json').then(response => response.json()).then(data => {
        return data.categories
    })
    return response
}

export default listCategories;