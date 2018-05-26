<template>
<div class="navBar" :class="{ noShadow: !isShadow }">
	<div id="nav" ref="nav">
		<router-link class="navLink" to="/components"><span>Components</span></router-link>
		<router-link class="navLink" to="/guide"><span>Guide</span></router-link>
		<router-link class="navLink" to="/"><span class="navLogo"><img src="../../static/logo.png" height="50px"></span></router-link>
		<router-link class="navLink" to="/about"><span>About</span></router-link>
		<router-link class="navLink" to="/contact"><span>Contact</span></router-link>
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
</template>

<script>
export default {
	props: ['isShadow'],
	name: '',
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
	right: 10px;
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
		-webkit-transition: 0.3s all cubic-bezier(0,.47,.37,.37);
		-moz-transition: 0.3s all cubic-bezier(0,.47,.37,.37);
		-o-transition: 0.3s all cubic-bezier(0,.47,.37,.37);
		transition: 0.3s all cubic-bezier(0,.47,.37,.37);
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
		span:hover {
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
