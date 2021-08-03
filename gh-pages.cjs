var ghPages = require('gh-pages');

ghPages.publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/x4d3/svelte-multiplication-circles.git', // Update to point to your repository
    user: {
      name: 'Xavier Delamotte', // update to use your name
      email: 'git@xade.eu' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
