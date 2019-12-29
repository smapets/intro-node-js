//window.App = window.App || {}
const {getUserById,getPostsForUser}=require("./api.js");

showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
      ${post.title}
      ${post.body}
      ${post.createdBy}
      </div>

      `
    })
    cb(postTemplates)
  })
};

showUserProfile = (userId, cb) => {
 getUserById(userId, user => {
    const profile = `
    <div>
    ${user.name}
    </div>
    `

    cb(user)
  })
}

module.exports={showPostsForCurrentUser,showUserProfile};
