import ComponentTable from '@/components/ComponentTable';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

const factory = (values = {}) => {
	return shallowMount(ComponentTable, {
		props: { ...values }
	});
};

describe('ComponentTable', () => {
	it('renders title as table\'s heading', () => {
		const wrapper = factory({title: { default: 'Hello' }});
		expect(wrapper.find('.title').text()).to.equal('Hello');
	});
});
