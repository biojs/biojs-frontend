<template>
<div id="nav-container">
	<div id="banner">
		Facing problems? <a href="https://gitter.im/biojs/biojs" target="_blank">Report an issue</a> or <a href="http://biojs.io/" target="_blank">View old website</a>
	</div>
	<div class="navBar" :class="{ noShadow: !isShadow }">
		<div id="nav" ref="nav">
			<router-link class="navLink" to="/components"><span>Components</span></router-link>
			<router-link class="navLink" to="/guide"><span>Guide</span></router-link>
			<router-link class="navLink" to="/" v-if="isHome">
				<span class="navLogo"><img src="../../static/logo.png" height="50px"></span>
			</router-link>
			<router-link class="navLink" to="/" v-if="!isHome" id="homeLink">
				<span>Home</span>
			</router-link>
			<router-link class="navLink" to="/about"><span>About</span></router-link>
			<router-link class="navLink" to="/contact"><span>Contact Us</span></router-link>
			<div class="close">
				<img @click="closeMenu()" src="../../static/close.png" alt="Close menu">
			</div>
		</div>
		<div id="mobileNav">
			<div class="hamburger" onclick="">
				<img src="../../static/hamburger.png" alt="Open Menu" @click="openMenu()">
			</div>
			<h2>Bio<span>JS</span></h2>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'NavBar',
	introduction: 'A custom navigation bar for the website',
	description: 'The navigation bar is made up with pure CSS. Vue-Router <router-link> has been used for links to various pages.',
	token: '<div class="navBar">\n\t<div id="nav">\n\t\t<router-link to="/"><span>..</span></router-link>\n\t</div>\n</div>',
	props: {
		isShadow: {
			type: Boolean,
			required: false,
			default: true,
			note: 'The navigation can either have a shadow at the bottom as observed in this page or it can be without a shadow as observed in the landing page.'
		},
		isHome: {
			type: Boolean,
			required: false,
			default: false,
			note: 'Show the text "Home" instead of the icon if not on home page'
		}
	},
	data () {
		return {
		};
	},
	methods: {
		openMenu: function () {
			this.$refs.nav.style.left = '0vw';
			return 0;
		},
		closeMenu: function () {
			this.$refs.nav.style.left = '-100vw';
			return 0;
		}
	}
};
</script>

<style lang="scss" scoped>
#nav-container {
	width: 100%;
	display: flex;
	flex-direction: column;
}
#banner {
	width: 100%;
	text-align: center;
	padding: 5px;
	color: #fff;
	background-color: rgb(19, 19, 19);
	font-size: 17px;
	a {
		color: #3e9bff;
	}
}
.navBar {
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-around;
	background: #fff;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16);
	z-index: 999;
}
.noShadow {
	box-shadow: none;
}
.navLink {
	text-decoration: none;
	color: #007E3A;
	font-weight: bolder;
}
#nav {
	z-index: 999;
	font-family: 'Roboto', sans-serif;
	margin-top: 10px;
	line-height: 50px;
	height: 50px;
	width: 80%;
	display: flex;
	justify-content: space-around;
	span {
		font-size: 17px;
		cursor: pointer;
		transition: 0.2s all ease-in-out;
	}
	span:hover::after {
		width: 105%;
	}
	.active::after {
		width: 105%;
	}
	span::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #007E3A;
		transition: width .3s;
	}
	.navLogo::after {
		display: none;
	}
}
#mobileNav {
	display: none;
	align-items: center;
	h2 {
		color: #007e3a;
		margin: 0;
		padding: 0;
	}
	span {
		color: #000;
	}
}
.hamburger {
	display: none;
	height: 40px;
	width: 40px;
	margin: 0 5px 0 20px;
	align-items: center;
	justify-content: center;
	img {
		height: 100%;
		width: 100%;
	}
}
.close {
	position: absolute;
	right: 20px;
	top: 10px;
	height: 40px;
	width: 40px;
	display: none;
	img {
		height: 100%;
		width: 100%;
	}
}
/*
	Responsive design
*/
@media (max-width: 768px) {
	.navBar {
		width: 100%;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: left;
		background: #fff;
		box-shadow: 0 1px 2px rgba(0,0,0,0.16);
	}
	.hamburger {
		display: flex;
	}
	#nav {
		line-height: 100%;
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: -100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background: #fff;
		margin: 0;
		padding-top: 80px;
		-webkit-transition: 0.3s all ease-in;
		-moz-transition: 0.3s all ease-in;
		-o-transition: 0.3s all ease-in;
		transition: 0.3s all ease-in;
		span {
			padding-left: 30px;
			line-height: 60px;
			font-size: 20px;
			cursor: pointer;
			transition: 0.2s all ease-in-out;
		}
		span:hover::after {
			width: 0%;
		}
		.navlink:hover {
			background-color: #efefef;
		}
	}
	.navLogo {
		display: none;
	}
	#mobileNav {
		display: flex;
	}
	.close {
		display: flex;
	}
	#homeLink {
		order: -1;
	}
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}
@media (max-width: 481px) {
	#nav {
		span {
			font-size: 15px;
			line-height: 40px;
		}
	}
}
</style>
