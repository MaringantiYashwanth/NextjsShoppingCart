export default async function Product({params}) {
    const {id} = await params
    return (
        <div>
            This is the product page for: {id}
        </div>
    )
}