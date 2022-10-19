module.exports = {
  mode: "extends",
  webpack: {
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify")
      }
    }
  }
}