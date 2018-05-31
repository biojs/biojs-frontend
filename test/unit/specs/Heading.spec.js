import Vue from 'vue';
import Heading from '@/components/Heading';

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
	const Constructor = Vue.extend(Component);
	const vm = new Constructor({ propsData: propsData }).$mount();
	return vm.$el.textContent;
}

describe('Heading.vue', () => {
	it('should render title as its text content', () => {
		expect(getRenderedText(Heading, {
			title: 'Hello'
		})).to.equal('Hello');
		expect(getRenderedText(Heading, {
			title: 'Bye'
		})).to.equal('Bye');
	});
});
