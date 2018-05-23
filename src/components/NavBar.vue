<template>
<div class="navBar">
	<div id="nav" ref="nav">
		<span>Components</span>
		<span>Guide</span>
		<span class="navLogo"><img src="../../static/logo.png" height="50px"></span>
		<span>About</span>
		<span>Contact</span>
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
	name: '',
	data () {
		return {
		}
	},
	methods: {
		openMenu: function () {
			this.$refs.nav.style.left = '0vw'
			return 0
		},
		closeMenu: function () {
			this.$refs.nav.style.left = '-100vw'
			return 0
		}
	}
}
</script>

<style lang="scss" scoped>
.navBar {
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-around;
	background: #fff;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16);
}
#nav {
	font-family: 'Roboto', sans-serif;
	margin-top: 10px;
	line-height: 50px;
	height: 50px;
	width: 80%;
	display: flex;
	justify-content: space-around;
}
#nav span {
	font-size: 17px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
}
#nav span:hover::after {
	width: 105%;
}
#nav .active::after {
	width: 105%;
}
#nav span::after {
	content: '';
	display: block;
	width: 0;
	height: 2px;
	background: #007E3A;
	transition: width .3s;
}
#nav .navLogo::after {
	display: none;
}
#mobileNav {
	display: none;
	align-items: center;
}
#mobileNav h2 {
	color: #007e3a;
}
#mobileNav h2 span {
	color: #000;
}
.hamburger {
	display: none;
	height: 40px;
	width: 40px;
	margin: 0 5px 0 20px;
	align-items: center;
	justify-content: center;
}
.hamburger img {
	height: 100%;
	width: 100%;
}
.close {
	position: absolute;
	right: 10px;
	top: 10px;
	height: 40px;
	width: 40px;
	display: none;
}
.close img {
	height: 100%;
	width: 100%;
}
/*
	Responsive design
*/
@media (max-width: 768px) {
	.navBar {
		width: 100%;
		height: 80px;
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
	}
	#nav span {
		padding-left: 30px;
		line-height: 60px;
		font-size: 20px;
		cursor: pointer;
		transition: 0.2s all ease-in-out;
	}
	#nav span:hover::after {
		width: 0%;
	}
	#nav span:hover {
		background-color: #efefef;
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
	#nav span {
		font-size: 15px;
		line-height: 40px;
	}
}
</style>