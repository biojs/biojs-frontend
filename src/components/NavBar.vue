<template>
<div class="navBar">
	<div id="nav">
		<span>Components</span>
		<span>Guide</span>
		<span class="navLogo"><img src="../../static/logo.png" height="50px"></span>
		<span>About</span>
		<span>Contact</span>
	</div>
</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
.navBar {
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-around;
	background: #fff;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16);
}
</style>
