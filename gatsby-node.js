const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  createPage({
    path: "/somefakepage",
    component: path.resolve("./src/components/postLayout.js"),
  })
}
