<template>
<div id="nav-container">
	<div id="banner">
		Facing problems? <a href="https://gitter.im/biojs/biojs" target="_blank">Contact us</a> or <a href="https://github.com/biojs/organisation/issues" target="_blank">Report an issue</a>
	</div>
	<div class="navBar" :class="{ noShadow: !isShadow }">
		<div id="nav" ref="nav">
			<router-link class="navLink navLogo" to="/">
				<span><img src="../../static/logo.png" height="50px"></span>
			</router-link>
			<div id="mobileNavHeading">
				<h1 id="bio">Bio</h1><h1 id="js">JS</h1>
			</div>
			<router-link class="navLink" :class="active=='components'?'active':''" to="/components"><span>Components</span></router-link>
			<router-link class="navLink" :class="active=='guide'?'active':''" to="/guide"><span>Guide</span></router-link>
			<router-link class="navLink" :class="active=='about'?'active':''" to="/about"><span>About</span></router-link>
			<router-link class="navLink" :class="active=='contact_us'?'active':''" to="/contact"><span>Contact Us</span></router-link>
			<div class="close">
				<img @click="closeMenu()" src="../../static/close.png" alt="Close menu">
			</div>
			<div id="mobileNavBottom">
				<div id="mobileNavSocialLink">
					<a href="https://github.com/biojs/biojs-frontend"><img src="../../static/github.png" alt="GitHub" class="mobileNavSocialLinkImg"></a>
					<a href="https://twitter.com/biojslibrary?lang=en"><img src="../../static/twitter.png" alt="Twitter" class="mobileNavSocialLinkImg"></a>
					<a href="mailto:community@biojs.net"><img src="../../static/mail.png" alt="Mail" class="mobileNavSocialLinkImg"></a>
				</div>
			</div>
		</div>
		<div id="mobileNav">
			<div class="hamburger" onclick="">
				<img src="../../static/hamburger.png" alt="Open Menu" @click="openMenu()">
			</div>

			<router-link class="navLink logoLink" to="/">
				<span><img src="../../static/logo.png" height="44px"></span>
			</router-link>
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
		active: {
			type: String,
			required: false,
			default: null
		},
		isShadow: {
			type: Boolean,
			required: false,
			default: true,
			note: 'The navigation can either have a shadow at the bottom as observed in this page or it can be without a shadow as observed in the landing page.'
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
.active>span::after{
	background: #007E3A;
	width: 105%!important;
}
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
	background: #f7f9ff;
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

#mobileNavHeading{
	display: none;
	padding: 30px;
	#bio{
		color: #007E3A;
	}
	#js{
		color: #000000;
	}

	#bio, #js{
		font-weight: 700;
		display: inline !important;
	}
}
#mobileNavBottom{
	display: none;
	flex: 1;
	align-items: flex-end;

	#mobileNavSocialLink{
		display: flex;
		justify-content: center;
		padding: 30px;
		flex: 1;
	}
}
#mobileNav {
	display: none;
	align-items: center;
	width: 100%;
	.logoLink {
		margin-left: auto;
		padding-right: 20px;
	}
	.navLogo-m {
		height: 44px;
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
	top: 35px;
	height: 40px;
	width: 40px;
	z-index: 100;
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
	.navLink{
		span::after{
			content: none!important;
		}
		padding: 30px 30px;
	}
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
		-webkit-transition: 0.4s all cubic-bezier(1,0,0,1);
		-moz-transition: 0.4s all cubic-bezier(1,0,0,1);
		-o-transition: 0.4s all cubic-bezier(1,0,0,1);
		transition: 0.4s all cubic-bezier(1,0,0,1);
		span {
			padding-left: 30px;
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
	#mobileNav, #mobileNavBottom, .close {
		display: flex;
	}
	#homeLink {
		order: -1;
	}
	#mobileNavHeading{
		display: block;
	}
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
}
@media (max-width: 481px) {
	#nav {
		span {
			font-size: 15px;
		}
	}
}
</style>
