// centralized error handling middleware

const errorHandling = (err, req, res, next) => {
    console.log("Error handling middleware called");
    console.log(err.stack);

    res.status(500).json({
        status: 500,
        message: "Something went wrong on the server",
        error: err.message
    });
}

export default errorHandling;