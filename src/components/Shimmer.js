const Shimmer = () => {
    return(
        <div className="mt-32 grid grid-cols-4 mx-10">
            {Array(10).fill(0).map((e, index) => (
            <div className="w-80 h-80 flex-shrink-0 m-4 bg-gray-200"> </div>
            ))}

        </div>
    )
}

export default Shimmer;