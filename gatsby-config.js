module.exports = {
	siteMetadata: {
		title: 'Serverless4All',
		author: 'Luca Bianchi',
		imageUrl: 'https://i.imgur.com/RnegQqD.jpg',
		description: 'Serverless for all. A collection of serverless resources for developers, architects and decision maker',
		keywords: `Serverless, cloud, computing, serverless`,
		twitter: 'https://twitter.com/bianchiluca',
		github: `https://github.com/aletheia`,
		medium: 'https://medium.com/@aletheia',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		amplify: 'https://aws.amazon.com/it/amplify/',
		siteUrl: `https://www.serverless4all.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `posts`,
			  path: `${__dirname}/src/posts`,
			},
		  },
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		 'gatsby-plugin-offline',
	]
};
