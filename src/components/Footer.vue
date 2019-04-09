<template>
    <div id="footer">
		<div id="description">
			<h3>Bio<span>JS</span></h3>
			<p>BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies.</p>
			<p>&copy; BioJS, {{ computeYear() }}</p>
		</div>
		<div id="right">
			<div id="social">
				<h5>Contact Us</h5>
				<div id="socialLinks">
					<div><a href="https://github.com/biojs/biojs-frontend"><img src="../../static/github.png" alt="GitHub" class="footerLinkImgs"><span>Github</span></a></div>
					<div><a href="https://twitter.com/biojslibrary?lang=en"><img src="../../static/twitter.png" alt="Twitter" class="footerLinkImgs"><span>Twitter</span></a></div>
					<div><a href="mailto:community@biojs.net"><img src="../../static/mail.png" alt="Mail" class="footerLinkImgs"><span>Mail</span></a></div>
				</div>
				<a :href="gitterURL">
					<button type="button" class="btn btn-success btn-sm">Contact us on Gitter</button>
				</a>
			</div>
			<div id="search-component">
				<h5>Browse</h5>
				<div id="browse">
					<div><router-link class="navLink" to="/components"><span>Components</span></router-link></div>
					<div><router-link class="navLink" to="/guide"><span>Guide</span></router-link></div>
					<div><router-link class="navLink" to="/about"><span>About</span></router-link></div>
					<div><router-link class="navLink" to="/contact"><span>Contact Us</span></router-link></div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import SearchComponent from './SearchComponent.vue';
export default {
	name: 'Footer',
	introduction: 'The footer component is meant for all the footers on each page.',
	description: 'Footer component appears at the end of each page and accepts no props.',
	token: '',
	components: {
		'search-component': SearchComponent
	},
	data () {
		return {
			gitterURL: 'https://gitter.im/biojs/biojs'
		};
	},
	created () {
		console.log('created');
	},
	mounted () {
		console.log('mounted');
	},
	methods: {
		computeYear () {
			return new Date().getFullYear();
		}
	}
};
</script>
<style lang="scss" scoped>
#footer {
	display: flex;
	flex-direction: row;
	width: 100%;
	min-height: 200px;
	font-size: 17px;
	background: rgb(40,40,40);
	color: white;
	padding: 10px;
	#description {
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 10px 10px 10px 50px;
		padding: 5px;
		h3 {
			color: #00AF66;
			font-weight: bold;
			span {
				color: white;
			}
		}
		p {
			font-size: 15px;
			color: #ccc;
			margin: 2px 0;
		}
	}
	#right {
		display: flex;
		flex-direction: row;
		width: 60%;
		height: 100%;
		margin-left: 50px;
		#social {
			width: 45%;
			height: 90%;
			display: flex;
			flex-direction: column;
			margin: 10px;
			padding: 5px;
			#socialLinks {
				display: flex;
				flex-direction: column;
				padding: 0;
				margin: 5px 0;
				a {
					display: inline;
					margin: 0;
					padding: 0;
					text-decoration: none;
					color: #ccc;
					transition: 0.2s ease-in-out;
					.footerLinkImgs {
						width: 21.5px;
						height: 18px;
						margin: 0 5px 0 0;
					}
					span {
						font-size: 14px;
					}
				}
				a:hover {
					color: #fff;
				}
			}
			a {
				margin: 5px 0;
			}
		}
		#search-component {
			width: 45%;
			height: 90%;
			display: flex;
			flex-direction: column;
			margin: 10px 10px 10px 40px;
			padding: 5px;
			#browse {
				display: flex;
				flex-direction: column;
				.navLink {
					display: inline;
					text-decoration: none;
					color: #ccc;
					transition: 0.2s ease-in-out;
				}
				.navLink:hover {
					color: white;
				}
			}
		}
	}
}
/*
	Responsive design
*/
@media (max-width: 840px) {
	#footer {
		#description {
			margin-left: 30px;
		}
	}
}
@media (max-width: 730px) {
	#footer {
		#description {
			width: 45%;
			p {
				font-size: 14px;
			}
		}
		#right {
			margin-left: 10px;
			#search-component {
				margin-left: 20px;
				#browse {
					.navLink {
						font-size: 14px;
					}
				}
			}
		}
	}
}
@media (max-width: 645px) {
	#footer {
		flex-direction: column;
		align-items: center;
		#description {
			height: 40%;
			width: 90%;
			align-items: center;
			margin: 0;
			p {
				text-align: center;
			}
		}
		#right {
			flex-direction: row;
			justify-content: center;
			width: 90%;
			height: 30%;
			margin: 0;
			#social {
				align-items: center;
				height: 40%;
				width: 90%;
				padding: 0 20px 0 0;
				margin: 0;
				border-right: 0.4px solid #888;
			}
			#search-component {
				align-items: center;
				height: 40%;
				width: 90%;
				padding: 0;
				margin: 0;
				#browse {
					margin: 0;
					align-items: center;
				}
			}
		}
	}
}
@media (max-width: 400px) {
	#footer {
		#description {
			p {
				font-size: 13px;
			}
		}
		#right {
			#social {
				padding: 0 5px 0 0;
				h5 {
					font-size: 17px;
				}
				a {
					button {
						padding: 3px;
						font-size: 13px;
					}
				}
				#socialLinks {
					a {
						span {
							font-size: 13px;
						}
					}
				}
			}
			#search-component {
				h5 {
					font-size: 17px;
				}
				#browse {
					.navLink {
						font-size: 13px;
					}
				}
			}
		}
	}
}
</style>
