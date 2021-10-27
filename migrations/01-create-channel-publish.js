module.exports = function (migration) {
    // Create a new category field in the blog post content type.
    const blogPost = migration.editContentType('post');
    blogPost.createField('publishtoTwitter')
      .name('Publish to Twitter')
      .type('Boolean');
    blogPost.createField('publishtoSlack')
      .name('Publish to Slack')
      .type('Boolean');
  }